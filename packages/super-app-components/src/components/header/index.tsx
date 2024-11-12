import { IsolateTheme } from 'base'
import InternalHeader from './Header'

function Header() {
  return (
    <IsolateTheme>
      <InternalHeader />
    </IsolateTheme>
  )
}

export { InternalHeader }

export default Header
