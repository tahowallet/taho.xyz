import { signManifesto, UserData } from "features/Manifesto/api";
import { Account, SiweToken } from "features/Manifesto/types";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export function useManifestoSign(
  account: Account | undefined,
  token: SiweToken | undefined,
  userData: UserData | undefined
) {const { mutate, data, error, isLoading } = useMutation(
    ["signature", account?.address, token, userData],
    async () => {
      if (!account) throw new Error();
      if (!userData) throw new Error();
      if (!token) throw new Error();

      const signature = await account.signer.signMessage(
        userData.manifestoMessage
      );
      await signManifesto({ token, signature });
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
