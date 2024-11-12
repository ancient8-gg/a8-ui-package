import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import {
  getDefaultConfig,
  RainbowKitProvider,
  type Chain as RainbowKitChain,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  bitgetWallet,
  coinbaseWallet,
  coin98Wallet,
  okxWallet,
} from '@rainbow-me/rainbowkit/wallets'
import * as allWallets from '@rainbow-me/rainbowkit/wallets'
import { sepolia, ancient8 } from 'viem/chains'

import '@rainbow-me/rainbowkit/styles.css'
import '@ancient8/components/styles.scss'
import type { ReactNode, ReactElement } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClient = new QueryClient()

const supportedChains = [
  sepolia,
  { ...ancient8, iconUrl: '/img/a8-token.png' },
] as [RainbowKitChain, ...RainbowKitChain[]]

const wagmiConfig = getDefaultConfig({
  appName: 'next-mf',
  projectId: '2c6406174410a7ddd96218ba9a0f4476',
  chains: supportedChains,
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        bitgetWallet,
        coinbaseWallet,
        coin98Wallet,
        okxWallet,
      ],
    },
    {
      groupName: 'All',
      wallets: Object.values(allWallets),
    },
  ],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {getLayout(<Component {...pageProps} />)}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
