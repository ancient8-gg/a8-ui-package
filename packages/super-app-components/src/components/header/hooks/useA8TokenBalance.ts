import { useReadContract, useAccount } from 'wagmi'
import { erc20Abi, formatUnits } from 'viem'
import { sepolia, ancient8Sepolia, mainnet, ancient8 } from 'viem/chains'

const A8_TOKEN_ADDRESS: Record<number, `0x${string}`> = {
  [mainnet.id]: '0x3E5A19c91266aD8cE2477B91585d1856B84062dF',
  [sepolia.id]: '0xf7C8593D0a46793A94476279d9b192E0349eDd32',
  [ancient8.id]: '0xD812d616A7C54ee1C8e9c9CD20D72090bDf0d424',
  [ancient8Sepolia.id]: '0xfC57492d6569f6F45Ea1b8850e842Bf5F9656EA6',
}

export const useA8TokenBalance = () => {
  const { address, chainId } = useAccount()

  const { data } = useReadContract({
    address: A8_TOKEN_ADDRESS[chainId ?? 1],
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address!],
    query: {
      enabled: !!address && !!chainId,
      initialData: 0n,
    },
  })

  return formatUnits(data ?? 0n, 18)
}
