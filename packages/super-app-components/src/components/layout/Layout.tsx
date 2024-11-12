import { Flex, Layout as AntdLayout } from 'antd'

import { InternalHeader } from 'components/header'
import { InternalSider } from 'components/sider'

import type { LayoutProps } from './types'

function Layout({ config, children }: LayoutProps) {
  return (
    <AntdLayout hasSider>
      <InternalHeader />
      <Flex className="a8-pkg-layout-content-wrapper">
        <div className="a8-pkg-layout-sider-container">
          <InternalSider config={config} />
        </div>
        <div>{children}</div>
      </Flex>
    </AntdLayout>
  )
}

export default Layout
