import { Account } from "features/Manifesto/types";
import { useMutation } from "react-query";
import { SiweMessage } from "siwe";

export function useSIWE() {
  const { mutate, data, error, isLoading } = useMutation(
    async (account: Account) => {
      const siwe = new SiweMessage({
        domain: window.location.host,
        address: account.address,
        statement: "Sign in",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: new Date().getTime().toFixed(),
      });

      const message = siwe.prepareMessage();
      const signature = await account.signer.signMessage(message);

      return { message, signature };
    },
    { retry: false }
  );

  return {
    signInWithEthereum: mutate,
    token: data,
    tokenError: error,
    tokenIsLoading: isLoading,
  };
}
