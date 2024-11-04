import { IsolateTheme } from 'base'
import InternalHeader from './Header'

import type { HeaderProps } from './types'

function Header(props: HeaderProps) {
  return (
    <IsolateTheme>
      <InternalHeader {...props} />
    </IsolateTheme>
  )
}

export type { HeaderProps }

export { InternalHeader }

export default Header
