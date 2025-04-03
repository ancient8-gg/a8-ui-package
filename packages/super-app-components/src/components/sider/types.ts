import type { CmsConfig, StrapiResponse } from '@/types/cms.type'

export type SiderConfig = {
  sider: CmsConfig
}

export type SiderProps = {
  config: SiderConfig
}

export type SiderStrapiType = {
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
  children: SiderStrapiType[]
  id: number
  linkTo: string
  publishedAt: Date
  subTitle: string | null
  title: string
  updatedAt: Date
  order: number
}

export type SiderStrapiResType = StrapiResponse<SiderStrapiType>

export type SiderMenuType = {
  id: number
  badge: string | null
  linkTo: string
  title: string
  icon: string
  children?: SiderMenuType[]
  order: number
}

export type SiderContextProps = {
  siderCollapsed: boolean
  setSiderCollapsed: (collapsed: boolean) => void
}
