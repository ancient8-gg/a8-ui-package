import type { SiderConfig } from 'components/sider'
import type { PropsWithChildren } from 'react'

export type LayoutConfig = SiderConfig

export type LayoutProps = PropsWithChildren<{
  config: LayoutConfig
  classNames?: {
    content?: string
  }
}>
