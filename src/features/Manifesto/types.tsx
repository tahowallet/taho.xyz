import { ethers } from "ethers";

export interface SiweToken {
  message: string;
  signature: string;
}

export interface Account {
  address: string;
  signer: ethers.providers.JsonRpcSigner;
}
