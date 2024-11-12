import { IsolateTheme } from 'base'
import InternalSider from './Sider'

import type { SiderProps, MenuStrapiType, SiderConfig } from './types'

function Sider(props: SiderProps) {
  return (
    <IsolateTheme>
      <InternalSider {...props} />
    </IsolateTheme>
  )
}

export type { SiderProps, MenuStrapiType, SiderConfig }

export { InternalSider }

export default Sider
