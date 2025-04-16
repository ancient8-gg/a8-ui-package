import { type ReactNode, useEffect } from 'react'
import { describe, expect } from 'vitest'
import { ancient8, type Chain, mainnet, sepolia } from 'viem/chains'
import { createConfig, http, mock, useConnect, WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { fireEvent, render, waitFor } from '@testing-library/react'

import ConnectButton from '@/components/connect-button'

const queryClient = new QueryClient()

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const connectors = [
  mock({
    accounts: ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'],
  }),
]

function Provider({
  children,
  chains = [mainnet, ancient8],
}: {
  children: ReactNode
  chains?: readonly [Chain, ...Chain[]]
}) {
  const config = createConfig({
    chains,
    connectors: connectors,
    transports: {
      [mainnet.id]: http(),
      [ancient8.id]: http(),
      [sepolia.id]: http(),
    },
  })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

function MockConnect() {
  const { connect } = useConnect()

  useEffect(() => {
    connect?.({ connector: connectors[0] })
  }, [connect])

  return null
}

const renderBtn = () => {
  return waitFor(() => render(<ConnectButton />, { wrapper: Provider }))
}

const connectedBtn = () => {
  return waitFor(() =>
    render(<ConnectButton />, {
      wrapper: ({ children }) => (
        <Provider>
          <MockConnect />
          {children}
        </Provider>
      ),
    }),
  )
}

describe('ConnectButton', () => {
  test('display correctly', async () => {
    const screen = await renderBtn()
    const btn = screen.queryByRole('button')!
    expect(btn.textContent?.includes('Connect')).toBeTruthy()
  })

  test('show connect modal', async () => {
    const screen = await renderBtn()
    const btn = screen.queryByRole('button')!
    fireEvent.click(btn)
    expect(screen.queryByRole('dialog')).toBeTruthy()
  })

  test('display connected correctly', async () => {
    const screen = await connectedBtn()
    const btn = screen.queryByRole('button')!
    expect(btn.textContent?.includes('🍣')).toBeTruthy() // Avatar
    expect(btn.textContent?.includes('0xf3...2266')).toBeTruthy() // Address
  })
})
