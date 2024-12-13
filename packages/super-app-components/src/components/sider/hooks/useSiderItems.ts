import { useContext, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { SiderConfigContext } from '../context'

import { parseStrapiMenu, type StrapiMenu } from 'utils/parse-strapi-menu'

import type { MenuStrapiResponseType } from '../types'

const QUERY_KEY = 'sider-items'

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

  if (window === undefined || typeof window === 'undefined')
    return {
      data: [],
    }

  const initialDataLocal = JSON.parse(localStorage.getItem(QUERY_KEY) ?? '[]')
  /*
   * NOTE: Keep for using later
   */

  // const { data, ...rest } = useInfiniteQuery({
  //   queryKey: [QUERY_KEY],
  //   networkMode: 'offlineFirst',
  //   initialData: {
  //     pages: [initialDataLocal],
  //     pageParams: [1],
  //   },
  //   initialPageParam: 1,
  //   queryFn: async ({ pageParam }: { pageParam: number }) => {
  //     const result = await fetchSiderItems(pageParam)
  //
  //     const data = {
  //       nextPage:
  //         pageParam < result.meta.pagination.pageCount
  //           ? pageParam + 1
  //           : undefined,
  //       data: result.data,
  //     }
  //     await new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(true)
  //       }, 2000)
  //     })
  //
  //     localStorage.setItem(QUERY_KEY, JSON.stringify(data))
  //
  //     // return []
  //     return data
  //   },
  //   getNextPageParam: (lastPage) => lastPage?.nextPage,
  //   enabled: !!baseUrl,
  // })
  //
  // const menuItems = useMemo(() => {
  //   if (!data) return []
  //   const menuStrapiParsed = data.pages
  //     .flatMap((page) => page.data)
  //     .filter((e) => !!e)
  //   return parseStrapiMenu(menuStrapiParsed)
  // }, [data])
  //
  // return {
  //   data: menuItems,
  //   ...rest,
  // }

  return useQuery<StrapiMenu[]>({
    queryKey: [QUERY_KEY],
    initialData: initialDataLocal,
    queryFn: async () => {
      const res = await fetchSiderItems()

      const data = parseStrapiMenu(res.data ?? [])
      localStorage.setItem(QUERY_KEY, JSON.stringify(data))

      return data
    },
    enabled: !!baseUrl,
  })
}
