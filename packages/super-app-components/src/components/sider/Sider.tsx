import { Layout } from 'antd'

import SiderMenu from './SiderMenu'
import { SiderConfigContext } from './context'

import { useCollapseStore } from './stores/collapse.store'

import type { SiderProps } from './types'

function Sider({ config }: SiderProps) {
  const { siderCollapsed } = useCollapseStore()

  return (
    <SiderConfigContext.Provider value={config}>
      <Layout.Sider collapsed={siderCollapsed}>
        <SiderMenu />
      </Layout.Sider>
    </SiderConfigContext.Provider>
  )
}

export default Sider
