export type CmsConfig = {
  baseUrl: string
  accessToken: string
}

export type SiderConfig = {
  sider: CmsConfig
}

export type SiderProps = {
  config: SiderConfig
}

export type MenuStrapiType = {
  badge: string | null
  createdAt: Date
  documentId: string
  icon: {
    id: number
    documentId: string
    formats: {
      small: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string | null
        size: number
        width: number
        height: number
        sizeInBytes: number
      }
      thumbnail: {
        ext: string
        url: string
        hash: string
        mime: string
        name: string
        path: string | null
        size: number
        width: number
        height: number
        sizeInBytes: number
      }
    }
  } | null
  children: MenuStrapiType[]
  id: number
  linkTo: string
  publishedAt: Date
  subTitle: string | null
  title: string
  updatedAt: Date
}

export type MenuStrapiResponseType = {
  data: MenuStrapiType[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export type SiderContextProps = {
  siderCollapsed: boolean
  setSiderCollapsed: (collapsed: boolean) => void
}
