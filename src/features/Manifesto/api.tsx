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

if (typeof window === "object") {
  initializeApp(firebaseConfig);
  if (window.location.host.startsWith("localhost:")) {
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
