import { ethers } from "ethers";
import React from "react";
import { useQuery } from "react-query";

const ensProvider = new ethers.providers.CloudflareProvider();

export function AddressDisplay({ address }: { address: string }) {
  const { data } = useQuery(["address-domain", address], () =>
    ensProvider.lookupAddress(address)
  );

  return <>{data ?? address}</>;
}
