import { getStats } from "features/Manifesto/api";
import React from "react";
import { useQuery } from "react-query";

export function SignatureCount() {
  const { data, isLoading, error } = useQuery(
    ["stats"],
    async () => {
      const { data } = await getStats();
      return data;
    },
    { retry: false, refetchInterval: 60000 }
  );

  return <>{data?.signatureCount.toLocaleString() ?? <>&nbsp;</>}</>;
}
