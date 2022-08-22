import { initializeApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import { firebaseConfig } from "./firebase-config";
import { SiweToken } from "./types";

export interface UserData {
  manifestoMessage: string;
  signedMessage: SiweToken | null;
}

export interface SignatureData {
  index: number;
  address: string;
  signature: string;
  timestampUnixMillis: number;
}

if (typeof window === "object") {
  initializeApp(firebaseConfig);
  if (process.env.GATSBY_USE_FIREBASE_EMULATOR === "true") {
    connectFunctionsEmulator(getFunctions(), "localhost", 5001);
  }
}

function excludeSsr<T>(getter: () => T) {
  if (typeof window === "object") return getter();
  return undefined as never;
}

export const getStats = excludeSsr(() =>
  httpsCallable<{}, { signatureCount: number }>(getFunctions(), "getStats")
);

export interface SignatureListSlice {
  totalCount: number;
  items: SignatureData[];
}

export const listSignatures = excludeSsr(() =>
  httpsCallable<{ before?: number | null; limit: number }, SignatureListSlice>(
    getFunctions(),
    "listSignatures"
  )
);

export const getUser = excludeSsr(() =>
  httpsCallable<{ token: SiweToken }, UserData>(getFunctions(), "getUser")
);

export const signManifesto = excludeSsr(() =>
  httpsCallable<{ token: SiweToken; signature: string }, {}>(
    getFunctions(),
    "signManifesto"
  )
);

export const claimDiscordRole = excludeSsr(() =>
  httpsCallable<
    { token: SiweToken; discordToken: string },
    { user: { id: string; username: string; discriminator: string } }
  >(getFunctions(), "claimDiscordRole")
);
