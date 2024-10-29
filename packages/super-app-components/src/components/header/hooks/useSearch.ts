import { useContext } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { HeaderConfigContext } from '../context'

export const useSearch = (value: string | undefined) => {
  const { search } = useContext(HeaderConfigContext)

  return useQuery({
    queryKey: ['search', value],
    queryFn: async () => {
      const { data } = await axios.get(
        `${search.baseUrl}?q=${value}&limit=5&skip=0`,
      )

      return data
    },
  })
}
