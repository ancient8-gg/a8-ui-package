import clsx from 'clsx'

import { Layout, Button } from 'antd'
import { ArrowRight2 } from 'iconsax-react'

import SiderMenu from './SiderMenu'
import { SiderConfigContext } from './context'

import { useCollapseStore } from './stores/collapse.store'

import type { SiderProps } from './types'

function Sider({ config }: SiderProps) {
  const { siderCollapsed, setSiderCollapsed } = useCollapseStore()

  return (
    <SiderConfigContext.Provider value={config}>
      <Layout.Sider collapsed={siderCollapsed} collapsedWidth={56}>
        <SiderMenu />
        <Button
          className={clsx(
            'a8-pkg-sider-toggle',
            !siderCollapsed && 'a8-pkg-sider-toggle-open',
          )}
          shape="circle"
          icon={<ArrowRight2 size="14" color="#E1E2E5" />}
          onClick={() => setSiderCollapsed(!siderCollapsed)}
        />
      </Layout.Sider>
    </SiderConfigContext.Provider>
  )
}

export default Sider
