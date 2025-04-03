import { IsolateTheme } from '@/components/base'
import InternalLayout from './Layout'

import type { LayoutProps } from './types'

function Layout(props: LayoutProps) {
  return (
    <IsolateTheme>
      <InternalLayout {...props} />
    </IsolateTheme>
  )
}

export { LayoutProps }

export default Layout
