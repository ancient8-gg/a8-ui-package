export type CmsConfig = {
  baseUrl: string
}

export type StrapiResponse<T> = {
  data: Array<T>
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
