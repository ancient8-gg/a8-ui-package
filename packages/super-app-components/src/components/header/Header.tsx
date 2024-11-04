import { InternalConnectButton } from '../connect-button'
import Search from './Search'
import { HeaderConfigContext } from './context'

import { Brand } from 'assets/icons'

import type { HeaderProps } from './types'

function Header({ config }: HeaderProps) {
  return (
    <HeaderConfigContext.Provider value={config}>
      <div className="a8-header-wrapper">
        <div className="a8-header-container">
          <div className="a8-header-brand">
            <Brand />
          </div>

          <div className="a8-header-search">
            <Search />
          </div>

          <InternalConnectButton />
        </div>
      </div>
    </HeaderConfigContext.Provider>
  )
}

export default Header
