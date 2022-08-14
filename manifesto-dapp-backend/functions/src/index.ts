import { ethers } from "ethers";
import * as firebase from "firebase-admin";
import * as functions from "firebase-functions";
import * as https from "https";
import { SiweMessage } from "siwe";
import {
  discordBotAuthToken,
  discordGuildId,
  discordRoleId,
} from "./discord-config";
import { manifestoMessage } from "./manifesto";

interface SignedMessage {
  message: string;
  signature: string;
}

interface UserData {
  signedManifesto?: SignedMessage;
}

firebase.initializeApp();

const addressCollection: firebase.firestore.CollectionReference<UserData> = firebase
  .firestore()
  .collection("address");

const statsDoc: firebase.firestore.DocumentReference<{
  signatureCount?: number;
}> = firebase.firestore().collection("site").doc("main");

export const getStats = functions.https.onCall(async () => {
  const stats = await statsDoc.get();
  const signatureCount = stats.data()?.signatureCount ?? 0;

  return { signatureCount };
});

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

    const addressDoc = addressCollection.doc(address);

    await firebase.firestore().runTransaction(async (txn) => {
      const addressDocSnapshot = await txn.get(addressDoc);
      if (addressDocSnapshot.data()?.signedManifesto) return;

      const statsSnapshot = await txn.get(statsDoc);

      txn.set(
        addressDoc,
        { signedManifesto: { message: manifestoMessage, signature } },
        { merge: true }
      );

      txn.set(
        statsDoc,
        { signatureCount: (statsSnapshot.data()?.signatureCount ?? 0) + 1 },
        { merge: true }
      );
    });
  }
);

export const claimDiscordRole = functions.https.onCall(
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
      throw new Error("Manifesto not signed");
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
              reject(`Unexpected status code: ${response.statusCode}`);
              response.on("data", (data) => console.warn(data.toString()));
            } else {
              response.on("data", (data) => {
                chunks.push(data);
              });
              response.on("end", () => {
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
      const request = https.request(
        `https://discord.com/api/v10/guilds/${discordGuildId}/members/${user.id}/roles/${discordRoleId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bot ${discordBotAuthToken}`,
          },
        },
        (response) => {
          if (response.statusCode === 204) {
            resolve(undefined);
          } else {
            reject(`Unexpected status code: ${response.statusCode}`);
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

async function verifyToken(token: SignedMessage) {
  const { message, signature } = token;
  const ttlMillis = 24 * 60 * 60 * 1000; // One day

  const verified = await new SiweMessage(message).validate(signature);

  if (new Date(verified.nonce).getTime() + ttlMillis < Date.now()) {
    throw new Error("Expired nonce");
  }

  if (verified.chainId !== 1) {
    throw new Error("Wrong chain");
  }

  if (!["tally.cash", "localhost:8000"].includes(verified.domain)) {
    throw new Error("Wrong domain");
  }

  if (
    [
      "https://tally.cash/manifesto",
      "https://localhost:8000/manifesto",
    ].includes(verified.uri)
  ) {
    throw new Error("Wrong URI");
  }

  return verified.address;
}
