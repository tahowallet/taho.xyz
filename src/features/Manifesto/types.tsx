import { ethers } from "ethers";
import { UserData } from "features/Manifesto/api";

export interface Account {
  address: string;
  signer: ethers.providers.JsonRpcSigner;
}

export interface SiweToken {
  message: string;
  signature: string;
}

export interface SiweAccount extends Account {
  token: SiweToken;
}

export interface FullAccount extends SiweAccount {
  data: UserData;
}
