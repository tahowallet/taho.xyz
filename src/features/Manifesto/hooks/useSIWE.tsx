import { ethers } from "ethers";
import { SiweAccount } from "features/Manifesto/types";
import { useMutation } from "react-query";
import { SiweMessage } from "siwe";

export function useSIWE() {
  const { mutate, data, error, isLoading } = useMutation(
    async (): Promise<SiweAccount> => {
      const tallyWindowProvider = (window as any)?.tally;

      if (!tallyWindowProvider || !tallyWindowProvider.isTally) {
        throw new Error(
          "We don't have window.tally or it's not a tally provider"
        );
      }

      const provider = new ethers.providers.Web3Provider(tallyWindowProvider);

      try {
        await provider.send("eth_requestAccounts", []);
      } catch (e) {
        console.error(e);
        throw e;
      }

      const signer = provider.getSigner();
      const address = await signer.getAddress();

      const siwe = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: "Sign in",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: new Date().getTime().toFixed(),
      });

      const message = siwe.prepareMessage();
      const signature = await signer.signMessage(message);

      return { address, signer, token: { message, signature } };
    },
    { retry: false }
  );

  return {
    signInWithEthereum: mutate,
    siweAccount: data,
    tokenError: error,
    tokenIsLoading: isLoading,
  };
}
