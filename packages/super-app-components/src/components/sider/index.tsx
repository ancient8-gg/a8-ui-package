import { IsolateTheme } from 'base'
import InternalSider from './Sider'

import type { SiderProps, SiderConfig } from './types'

function Sider(props: SiderProps) {
  return (
    <IsolateTheme>
      <InternalSider {...props} />
    </IsolateTheme>
  )
}

export type { SiderProps, SiderConfig }

export { InternalSider }

export default Sider
