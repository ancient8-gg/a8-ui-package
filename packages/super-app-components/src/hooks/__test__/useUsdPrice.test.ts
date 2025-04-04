import { describe, test, expect, vi } from 'vitest'
import axios from 'axios'

type TokenIdType = 'ethereum' | 'ancient8'
type ResType = Record<TokenIdType, { usd: number }>

const mockUtilsApi = 'https://utils-api.ancient8.gg'

const fetchUsdPrices = async (utilsApi: string): Promise<ResType> => {
  const { data } = await axios.get<ResType>(`${utilsApi}/price`, {
    params: {
      ids: 'ancient8,ethereum',
      vs_currencies: 'usd',
    },
  })
  return (
    data ?? {
      ancient8: { usd: 0 },
      ethereum: { usd: 0 },
    }
  )
}

vi.mock('axios')
const mockedAxios = axios as unknown as { get: ReturnType<typeof vi.fn> }

describe('useUsdPrice internal logic', () => {
  test('should fetch and return correct data', async () => {
    const mockData = {
      ancient8: { usd: 0.55 },
      ethereum: { usd: 3450 },
    }

    mockedAxios.get.mockResolvedValueOnce({ data: mockData })

    const result = await fetchUsdPrices(mockUtilsApi)

    expect(mockedAxios.get).toHaveBeenCalledWith(`${mockUtilsApi}/price`, {
      params: {
        ids: 'ancient8,ethereum',
        vs_currencies: 'usd',
      },
    })
    expect(result).toEqual(mockData)
  })

  test('should throw error on fetch failure', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'))

    await expect(fetchUsdPrices(mockUtilsApi)).rejects.toThrow('API Error')
  })

  test('should return default values when data is undefined', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: undefined })

    const result = await fetchUsdPrices(mockUtilsApi)

    expect(result).toEqual({
      ancient8: { usd: 0 },
      ethereum: { usd: 0 },
    })
  })
})
