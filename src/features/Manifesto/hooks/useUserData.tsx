import { getUser } from "features/Manifesto/api";
import { SiweToken } from "features/Manifesto/types";
import { useQuery } from "react-query";

export function useUserData(token: SiweToken | undefined) {
  const { data, error, isLoading } = useQuery(
    ["user", token],
    async () => {
      if (!token) throw new Error();
      const result = await getUser({ token });
      return result.data;
    },
    { refetchOnWindowFocus: false, retry: false }
  );
  return {
    userData: data,
    userError: token && error,
    userIsLoading: isLoading,
  };
}
