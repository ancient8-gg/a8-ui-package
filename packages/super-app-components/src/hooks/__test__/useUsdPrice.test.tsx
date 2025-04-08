import { describe, test, expect, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'

import { HeaderConfigContext } from '@/components/header/context'

vi.mock('axios')

import axios from 'axios'
import { useUsdPrice } from '../useUsdPrice'

const Wrapper = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderConfigContext.Provider
        value={{
          header: {
            baseUrl: 'https://mock-api.com',
            utilsApi: 'https://mock-api.com',
          },
        }}
      >
        {children}
      </HeaderConfigContext.Provider>
    </QueryClientProvider>
  )
}

describe('useUsdPrice', () => {
  test('returns default prices initially', async () => {
    const { result } = renderHook(() => useUsdPrice(), { wrapper: Wrapper })
    await waitFor(() => {
      expect(result.current).toEqual({
        ancient8: 0.4,
        ethereum: 3400,
      })
    })
  })

  test('returns updated prices from API', async () => {
    ;(axios.get as any).mockResolvedValueOnce({
      data: {
        ancient8: { usd: 0.6 },
        ethereum: { usd: 3600 },
      },
    })

    const { result } = renderHook(() => useUsdPrice(), { wrapper: Wrapper })

    await waitFor(() => {
      expect(result.current).toEqual({
        ancient8: 0.6,
        ethereum: 3600,
      })
    })
  })

  test('returns 0 for missing token in API', async () => {
    ;(axios.get as any).mockResolvedValueOnce({
      data: {
        ethereum: { usd: 3000 },
      },
    })

    const { result } = renderHook(() => useUsdPrice(), { wrapper: Wrapper })

    await waitFor(() => {
      expect(result.current).toEqual({
        ancient8: 0,
        ethereum: 3000,
      })
    })
  })
})
