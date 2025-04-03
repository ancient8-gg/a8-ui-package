import type { CmsConfig, StrapiResponse } from '@/types/cms.type'

export type HeaderConfig = {
  header: {
    utilsApi: string
  } & CmsConfig
}

export type HeaderProps = {
  config: HeaderConfig
}

export type UserNavStrapiType = {
  id: number
  documentId: string
  title: string
  linkTo: string
  priority: number
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  icon: {
    url: string | null
  }
}

export type UserNavStrapiResType = StrapiResponse<UserNavStrapiType>

export type UserNavMenuType = {
  id: number
  icon: string
  title: string
  linkTo: string
}
