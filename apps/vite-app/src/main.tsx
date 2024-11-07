import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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

const queryClient = new QueryClient()

const supportedChains = [sepolia, ancient8] as [
  RainbowKitChain,
  ...RainbowKitChain[],
]

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
