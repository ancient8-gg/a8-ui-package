import { IsolateTheme } from 'base'
import InternalSider from './Sider'

import type { SiderProps, MenuStrapiType } from './types'

function Sider(props: SiderProps) {
  return (
    <IsolateTheme>
      <InternalSider {...props} />
    </IsolateTheme>
  )
}

export type { SiderProps, MenuStrapiType }

export { InternalSider }

export default Sider
