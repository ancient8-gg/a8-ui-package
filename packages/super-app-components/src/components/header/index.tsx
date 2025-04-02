import { IsolateTheme } from 'components/base'
import InternalHeader from './Header'

import type { HeaderProps, HeaderConfig } from './types'

function Header(props: HeaderProps) {
  return (
    <IsolateTheme>
      <InternalHeader {...props} />
    </IsolateTheme>
  )
}

export type { HeaderProps, HeaderConfig }

export { InternalHeader }

export default Header
