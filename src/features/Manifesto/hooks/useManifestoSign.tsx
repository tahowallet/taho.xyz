import { signManifesto } from "features/Manifesto/api";
import { FullAccount } from "features/Manifesto/types";
import { useMutation, useQueryClient } from "react-query";

export function useManifestoSign() {
  const queryClient = useQueryClient();
  const { mutate, data, error, isLoading } = useMutation(
    async ({ account }: { account: FullAccount }) => {
      const signature = await account.signer.signMessage(
        account.data.manifestoMessage
      );
      await signManifesto({ token: account.token, signature });
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
