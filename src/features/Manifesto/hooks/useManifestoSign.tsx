import { signManifesto, UserData } from "features/Manifesto/api";
import { Account, SiweToken } from "features/Manifesto/types";
import { useMutation, useQueryClient } from "react-query";

export function useManifestoSign() {
  const queryClient = useQueryClient();
  const { mutate, data, error, isLoading } = useMutation(
    async ({
      account,
      token,
      userData,
    }: {
      account: Account;
      token: SiweToken;
      userData: UserData;
    }) => {
      const signature = await account.signer.signMessage(
        userData.manifestoMessage
      );
      await signManifesto({ token, signature });
      queryClient.invalidateQueries(["stats"]);
      return signature;
    },
    { retry: false }
  );

  return {
    signManifesto: mutate,
    signature: data,
    signatureError: error,
    signatureIsLoading: isLoading,
  };
}
