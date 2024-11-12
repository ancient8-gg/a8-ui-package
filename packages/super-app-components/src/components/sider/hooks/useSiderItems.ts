import { useContext, useCallback, useMemo } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SiderConfigContext } from '../context'

import { parseStrapiMenu } from 'utils/parse-strapi-menu'

import type { MenuStrapiResponseType } from '../types'

export const useSiderItems = () => {
  const {
    sider: { baseUrl },
  } = useContext(SiderConfigContext)

  const fetchSiderItems = useCallback(
    async (page = 1) => {
      const { data } = await axios.get<Promise<MenuStrapiResponseType>>(
        `${baseUrl}`,
        {
          params: {
            pagination: {
              page,
              pageSize: 100,
            },
            'populate[0]': 'children',
            'populate[1]': 'icon',
            'filters[parent][$null]': true,
          },
        },
      )

      return data
    },
    [baseUrl],
  )

  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['sider-items'],
    initialPageParam: 1,
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const result = await fetchSiderItems(pageParam)

      return {
        nextPage:
          pageParam < result.meta.pagination.pageCount
            ? pageParam + 1
            : undefined,
        data: result.data,
      }
    },
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    enabled: !!baseUrl,
  })

  const menuItems = useMemo(() => {
    if (!data) return []
    const menuStrapiParsed = data.pages.flatMap((page) => page.data)
    return parseStrapiMenu(menuStrapiParsed)
  }, [data])

  return {
    data: menuItems,
    ...rest,
  }
}
