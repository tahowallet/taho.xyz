import { ethers } from "ethers";
import { useMutation } from "react-query";

export function useEthereumAccount() {
  const { data, error, isLoading, mutate } = useMutation(
    async ({ ethereum }: { ethereum: ethers.providers.ExternalProvider }) => {
      if (!ethereum) throw new Error();

      const provider = new ethers.providers.Web3Provider(ethereum);

      try {
        await provider.send("eth_requestAccounts", []);
      } catch (e) {
        console.error(e);
        throw e;
      }

      const signer = provider.getSigner();
      const address = await signer.getAddress();

      return { signer, address };
    },
    { retry: false }
  );
  return {
    connectWallet: mutate,
    account: data,
    accountError: error,
    accountIsLoading: isLoading,
  };
}
