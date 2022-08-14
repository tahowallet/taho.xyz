import { initializeApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";
import { firebaseConfig } from "./firebase-config";
import { SiweToken } from "./types";

initializeApp(firebaseConfig);
if (window.location.host.startsWith("localhost:")) {
  connectFunctionsEmulator(getFunctions(), "localhost", 5001);
}

export interface UserData {
  manifestoMessage: string;
  signedMessage: SiweToken | null;
}

export const getStats = httpsCallable<{}, { signatureCount: number }>(
  getFunctions(),
  "getStats"
);

export const getUser = httpsCallable<{ token: SiweToken }, UserData>(
  getFunctions(),
  "getUser"
);

export const signManifesto = httpsCallable<
  { token: SiweToken; signature: string },
  {}
>(getFunctions(), "signManifesto");

export const claimDiscordRole = httpsCallable<
  { token: SiweToken; discordToken: string },
  { user: { id: string; username: string; discriminator: string } }
>(getFunctions(), "claimDiscordRole");
