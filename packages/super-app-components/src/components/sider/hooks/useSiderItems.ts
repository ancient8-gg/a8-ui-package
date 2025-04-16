import { useContext, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SiderConfigContext } from '../context'
import { parseSiderStrapiMenu } from '../utils'

import type { SiderStrapiResType, SiderMenuType } from '../types'

const QUERY_KEY = 'sider-items'

export const useSiderItems = () => {
  const {
    sider: { strapiApi },
  } = useContext(SiderConfigContext)

  const fetchSiderItems = useCallback(
    async (page = 1) => {
      const { data } = await axios.get<Promise<SiderStrapiResType>>(
        `${strapiApi}`,
        {
          params: {
            pagination: {
              page,
              pageSize: 100,
            },
            'populate[0]': 'children',
            'populate[1]': 'icon',
            'filters[parent][$null]': true,
            'sort[0]': 'order:asc',
          },
        },
      )

      return data
    },
    [strapiApi],
  )

  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return { data: [] }
  }

  const initialDataLocal = JSON.parse(localStorage.getItem(QUERY_KEY) ?? '[]')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<SiderMenuType[]>({
    queryKey: [QUERY_KEY],
    initialData: initialDataLocal,
    queryFn: async () => {
      const res = await fetchSiderItems()

      const data = parseSiderStrapiMenu(res.data ?? [])
      localStorage.setItem(QUERY_KEY, JSON.stringify(data))

      return data
    },
    enabled: !!strapiApi,
  })
}
