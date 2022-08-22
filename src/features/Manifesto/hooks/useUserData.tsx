import { getUser } from "features/Manifesto/api";
import { FullAccount, SiweAccount } from "features/Manifesto/types";
import { useQuery } from "react-query";

export function useUserData(account: SiweAccount | undefined) {
  const { data, error, isLoading } = useQuery(
    ["user", account?.token],
    async (): Promise<FullAccount> => {
      if (!account) throw new Error();
      const result = await getUser({ token: account.token });
      return { ...account, data: result.data };
    },
    { refetchOnWindowFocus: false, retry: false }
  );
  return {
    fullAccount: data,
    userError: account && error,
    userIsLoading: isLoading,
  };
}
