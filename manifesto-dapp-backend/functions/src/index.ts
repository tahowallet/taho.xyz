import { ethers } from "ethers";
import * as firebase from "firebase-admin";
import * as firestore from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { HttpsError } from "firebase-functions/v1/https";
import * as https from "https";
import { SiweMessage } from "siwe";
import { manifestoMessage } from "./manifesto";
import axios from "axios";

interface SignedMessage {
  message: string;
  signature: string;
  timestamp: firestore.Timestamp;
  index: number;
}

interface UserData {
  signedManifesto?: SignedMessage;
  claimedRole?: boolean;
  galxeImported?: boolean;
}

firebase.initializeApp();

const addressCollection: firestore.CollectionReference<UserData> = firebase
  .firestore()
  .collection("address");

const statsDoc: firestore.DocumentReference<{
  signatureCount?: number;
}> = firebase.firestore().collection("site").doc("main");

export const getStats = functions.https.onCall(async () => {
  const stats = await statsDoc.get();
  const signatureCount = stats.data()?.signatureCount ?? 0;

  return { signatureCount };
});

const maxLimit = 200;

export const listSignatures = functions.https.onCall(
  async ({
    before = null,
    limit,
  }: {
    before?: number | null;
    limit: number;
  }) => {
    if (typeof limit !== "number" || limit > maxLimit) {
      throw new Error("invalid limit");
    }

    const stats = await statsDoc.get();
    const totalCount = stats.data()?.signatureCount ?? 0;

    const signatureIndexFieldPath = new firestore.FieldPath(
      "signedManifesto",
      "index"
    );

    const snapshot = await addressCollection
      .where(signatureIndexFieldPath, "<", before ?? 1e9)
      .orderBy(signatureIndexFieldPath, "desc")
      .limit(limit)
      .get();

    const items = snapshot.docs.flatMap((doc) => {
      const address = doc.id;
      const data = doc.data();
      if (!data.signedManifesto) return [];
      const { index, signature, timestamp } = data.signedManifesto;
      return [
        {
          index,
          address,
          signature,
          timestampUnixMillis: timestamp.toMillis(),
        },
      ];
    });

    return { totalCount, items };
  }
);

export const getUser = functions.https.onCall(
  async ({ token }: { token: SignedMessage }) => {
    const address = await verifyToken(token);

    const snapshot = await addressCollection.doc(address).get();
    const signedMessage = snapshot.data()?.signedManifesto ?? null;

    return { manifestoMessage, signedMessage };
  }
);

export const signManifesto = functions.https.onCall(
  async ({ token, signature }: { token: SignedMessage; signature: string }) => {
    const address = await verifyToken(token);

    const signerAddress = await ethers.utils.verifyMessage(
      manifestoMessage,
      signature
    );

    if (signerAddress !== address) {
      throw new Error("Signer != logged in address");
    }

    await storeSignature(address, signature);
  }
);

export const claimDiscordRole = functions
  .runWith({ secrets: ["DISCORD_APP_AUTH_TOKEN"] })
  .https.onCall(
    async ({
      token,
      discordToken,
    }: {
      token: SignedMessage;
      discordToken: string;
    }) => {
      const address = await verifyToken(token);

      const doc = await addressCollection.doc(address).get();

      if (!doc.data()?.signedManifesto) {
        throw new HttpsError(
          "not-found",
          "Manifesto not signed",
          "Manifesto not signed" // react-query swallows the message, but keeps the detail prop
        );
      }

      if (doc.data()?.claimedRole) {
        throw new HttpsError(
          "already-exists",
          "This address has already claimed a discord role!",
          "This address has already claimed a discord role!" // react-query swallows the message, but keeps the detail prop
        );
      }

      const { user } = await new Promise<{ user?: { id: string } }>(
        (resolve, reject) => {
          const request = https.request(
            "https://discord.com/api/v10/oauth2/@me",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${discordToken}`,
              },
            },
            (response) => {
              const chunks: Buffer[] = [];
              if (response.statusCode !== 200) {
                reject(
                  "Unexpected status code when getting user data:" +
                    response.statusCode
                );
                response.on("data", (data) => console.warn(data.toString()));
              } else {
                response.on("data", (data) => {
                  chunks.push(data);
                });
                response.on("end", async () => {
                  resolve(JSON.parse(Buffer.concat(chunks).toString()));
                });
              }
            }
          );

          request.on("error", reject);

          request.end();
        }
      );

      if (!user) throw new Error("user not found");

      await new Promise((resolve, reject) => {
        console.log(
          "---- auth token",
          `_${process.env.DISCORD_APP_AUTH_TOKEN}_`,
          "--- guild id",
          `_${process.env.DISCORD_GUILD_ID}_`,
          "--- role id",
          `_${process.env.DISCORD_ROLE_ID}_`,
          "--- user id",
          `_${user.id}_`,
          "--- discord url",
          `https://discord.com/api/v10/guilds/${process.env.DISCORD_GUILD_ID}/members/${user.id}/roles/${process.env.DISCORD_ROLE_ID}`
        );
        const request = https.request(
          `https://discord.com/api/v10/guilds/${process.env.DISCORD_GUILD_ID}/members/${user.id}/roles/${process.env.DISCORD_ROLE_ID}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bot ${process.env.DISCORD_APP_AUTH_TOKEN}`,
            },
          },
          async (response) => {
            if (response.statusCode === 204) {
              await addressCollection
                .doc(address)
                .update({ claimedRole: true });

              resolve(undefined);
            } else {
              reject(
                "Unexpected status code when assigning role:" +
                  response.statusCode
              );
            }
            response.on("data", (data) => console.warn(data.toString()));
          }
        );

        request.on("error", reject);

        request.end();
      });

      return { user };
    }
  );

async function storeSignature(address: string, signature: string) {
  const addressDoc = addressCollection.doc(address);
  await firebase.firestore().runTransaction(async (txn) => {
    const userSnapshot = await txn.get(addressDoc);
    const userData = userSnapshot.data();
    if (userData?.signedManifesto?.timestamp) return;

    const statsSnapshot = await txn.get(statsDoc);
    const signatureCount = statsSnapshot.data()?.signatureCount ?? 0;

    txn.set(
      addressDoc,
      {
        signedManifesto: {
          message: manifestoMessage,
          signature,
          index: signatureCount,
          timestamp: firestore.FieldValue.serverTimestamp(),
        },
        claimedRole: false,
        galxeImported: false,
      },
      { merge: true }
    );

    txn.set(statsDoc, { signatureCount: signatureCount + 1 }, { merge: true });
  });
}

async function verifyToken(token: SignedMessage) {
  const { message, signature } = token;
  const ttlMillis = 24 * 60 * 60 * 1000; // One day

  let verified;
  try {
    verified = await new SiweMessage(message).validate(signature);
  } catch (e) {
    throw new HttpsError(
      "invalid-argument",
      (e as Error).message,
      (e as Error).message
    );
  }

  if (new Date(verified.nonce).getTime() + ttlMillis < Date.now()) {
    throw new HttpsError("invalid-argument", "Expired nonce", "Expired nonce");
  }

  if (verified.chainId !== 1) {
    throw new HttpsError("invalid-argument", "Wrong chain", "Wrong chain");
  }

  if (
    !["tallyho.org", "tally.cash", "taho.xyz", "localhost:8000"].includes(
      verified.domain
    ) &&
    !verified.domain.endsWith("tally-cash.netlify.app")
  ) {
    throw new HttpsError("invalid-argument", "Wrong domain", "Wrong domain");
  }

  if (
    [
      "https://tallyho.org/web3pledge",
      "https://taho.xyz/web3pledge",
      "https://tally.cash/web3pledge",
      "https://localhost:8000/web3pledge",
    ].includes(verified.uri)
  ) {
    throw new HttpsError("invalid-argument", "Wrong URI", "Wrong URI");
  }

  return verified.address;
}

export const appendAddressesToGalxeCredential = functions
  .runWith({
    secrets: ["GALXE_ACCESS_TOKEN"],
  })
  .pubsub.schedule("every 5 minutes")
  .onRun(async () => {
    const snapshot = await addressCollection
      .where("galxeImported", "==", false)
      .get();

    const addresses: string[] = [];
    snapshot.forEach(async (dataSnapshot) => {
      addresses.push(dataSnapshot.id);
      await dataSnapshot.ref.update({ galxeImported: true });
    });

    console.log("number of addresses: ", addresses.length);

    const chunkSize = 2000;
    for (let i = 0; i < addresses.length; i += chunkSize) {
      const chunk = addresses.slice(i, i + chunkSize);

      try {
        // TODO: refactor to native post and remove axsios dep
        await axios.post(
          "https://graphigo.prd.galaxy.eco/query",
          {
            operationName: "credentialItems",
            query: `
      mutation credentialItems($credId: ID!, $operation: Operation!, $items: [String!]!)
        {
          credentialItems(input: {
            credId: $credId
            operation: $operation
            items: $items
          })
          {
            name
          }
        }
      `,
            variables: {
              // Make sure this is string type as int might cause overflow
              credId: process.env.GALXE_CREDENTIAL,
              operation: "APPEND",
              items: chunk,
            },
          },
          {
            headers: {
              "access-token": process.env.GALXE_ACCESS_TOKEN ?? "",
            },
          }
        );

        console.log("batch ", i);
      } catch (e) {
        console.log("error ", e);
      }
    }
  });
