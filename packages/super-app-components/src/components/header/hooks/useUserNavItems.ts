import { useContext, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { HeaderConfigContext } from '../context'

import type { UserNavStrapiResType, UserNavMenuType } from '../types'

const QUERY_KEY = 'user-nav-items'

export const useUserNavItems = () => {
  const {
    header: { baseUrl },
  } = useContext(HeaderConfigContext)

  const fetchUserNavItems = useCallback(
    async (page = 1) => {
      const { data } = await axios.get<Promise<UserNavStrapiResType>>(
        `${baseUrl}`,
        {
          params: {
            pagination: {
              page,
              pageSize: 100,
            },
            'populate[1]': 'icon',
            'sort[0]': 'priority:asc',
          },
        },
      )

      return data
    },
    [baseUrl],
  )

  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return { data: [] }
  }

  const initialDataLocal = JSON.parse(localStorage.getItem(QUERY_KEY) ?? '[]')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<UserNavMenuType[]>({
    queryKey: [QUERY_KEY],
    initialData: initialDataLocal,
    queryFn: async () => {
      const res = await fetchUserNavItems()

      const data = res.data ?? []
      const menus = data.map(({ id, icon, title, linkTo }) => ({
        id,
        icon: icon?.url ?? '',
        title,
        linkTo,
      })) as UserNavMenuType[]

      localStorage.setItem(QUERY_KEY, JSON.stringify(menus))

      return menus
    },
    enabled: !!baseUrl,
  })
}
