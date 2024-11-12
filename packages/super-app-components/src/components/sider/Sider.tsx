import { Layout } from 'antd'

import SiderMenu from './SiderMenu'
import { SiderConfigContext } from './context'

import { useCollapseStore } from './stores/collapse.store'

import type { SiderProps } from './types'

function Sider({ config }: SiderProps) {
  const { siderCollapsed, setSiderCollapsed } = useCollapseStore()

  return (
    <SiderConfigContext.Provider value={config}>
      <Layout.Sider
        collapsed={siderCollapsed}
        onMouseEnter={() => setSiderCollapsed(false)}
        onMouseLeave={() => setSiderCollapsed(true)}
        collapsedWidth={56}
      >
        <SiderMenu />
      </Layout.Sider>
    </SiderConfigContext.Provider>
  )
}

export default Sider
