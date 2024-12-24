import type { PropsWithChildren } from 'react'
import type { SiderConfig } from 'components/sider'
import type { HeaderConfig } from 'components/header/types'

export type LayoutConfig = SiderConfig & HeaderConfig

export type LayoutProps = PropsWithChildren<{
  config: LayoutConfig
  classNames?: {
    content?: string
  }
}>
