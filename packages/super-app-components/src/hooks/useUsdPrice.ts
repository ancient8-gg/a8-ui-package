import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'

import { HeaderConfigContext } from 'components/header/context'

export type TokenIdType = 'ethereum' | 'ancient8'

type ResType = Record<TokenIdType, { usd: number }>

export const useUsdPrice = () => {
  const {
    header: { utilsApi },
  } = useContext(HeaderConfigContext)

  const { data: price } = useQuery({
    queryKey: ['a8-pkg-usd-price'],
    initialData: {
      ancient8: { usd: 0.4 },
      ethereum: { usd: 3400 },
    } as ResType,
    queryFn: async () => {
      const { data } = await axios.get<ResType>(
        `${utilsApi}/price`,
        {
          params: {
            ids: 'ancient8,ethereum',
            vs_currencies: 'usd',
          },
        },
      )
      return data
    },
    refetchIntervalInBackground: true,
    refetchInterval: 1000 * 60 * 5,
  })

  return {
    ancient8: price?.ancient8?.usd ?? 0,
    ethereum: price?.ethereum?.usd ?? 0,
  } as Record<TokenIdType, number>
}
