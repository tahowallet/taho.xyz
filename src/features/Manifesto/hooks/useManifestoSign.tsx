import { signManifesto } from "features/Manifesto/api";
import { FullAccount, SiweToken } from "features/Manifesto/types";
import { useMutation, useQueryClient } from "react-query";

export function useManifestoSign() {
  const queryClient = useQueryClient();
  const { mutate, data, error, isLoading } = useMutation(
    async ({ account }: { account: FullAccount }): Promise<SiweToken> => {
      const message = account.data.manifestoMessage;
      const signature = await account.signer.signMessage(message);
      await signManifesto({ token: account.token, signature });
      queryClient.invalidateQueries(["stats"]);
      queryClient.invalidateQueries(["signatures"]);
      return { signature, message };
    },
    { retry: false }
  );

  return {
    signManifesto: mutate,
    signedMessage: data,
    signatureError: error,
    signatureIsLoading: isLoading,
  };
}
