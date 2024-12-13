export type CmsConfig = {
  baseUrl: string
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
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
  } | null
  children: MenuStrapiType[]
  id: number
  linkTo: string
  publishedAt: Date
  subTitle: string | null
  title: string
  updatedAt: Date
  order: number
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
