import clsx from 'clsx'

import { Flex, Layout as AntdLayout } from 'antd'

import { InternalHeader } from 'components/header'
import { InternalSider } from 'components/sider'

import type { LayoutProps } from './types'

function Layout({ config, children, classNames }: LayoutProps) {
  return (
    <AntdLayout hasSider={false}>
      <InternalHeader />
      <Flex className="a8-pkg-layout-content-wrapper">
        <div className="a8-pkg-layout-sider-container">
          <InternalSider config={config} />
        </div>
        <div className={clsx('a8-pkg-layout-content', classNames?.content)}>
          {children}
        </div>
      </Flex>
    </AntdLayout>
  )
}

export default Layout
