import { InternalConnectButton } from '../connect-button'

import { Brand } from 'assets/icons'

function Header() {
  return (
    <div className="a8-pkg-header-wrapper">
      <div className="a8-pkg-header-container">
        <div className="a8-pkg-header-brand">
          <Brand />
        </div>

        <InternalConnectButton />
      </div>
    </div>
  )
}

export default Header
