import { Flex } from 'antd'
import { Menu as MenuIcon, CloseCircle as CloseIcon } from 'iconsax-react'

import UserNavMenu from '@/components/header/UserNavMenu'
import { Brand } from '@/assets/icons'

import useIsMobile from '@/hooks/useIsMobile'
import { useCollapseStore } from '@/components/sider/stores/collapse.store'
import { HeaderConfigContext } from './context'

import type { HeaderProps } from './types'

function MobileSiderToggle() {
  const isMobile = useIsMobile()
  const { siderCollapsed, setSiderCollapsed } = useCollapseStore()

  if (!isMobile) return null

  if (siderCollapsed)
    return (
      <MenuIcon
        size="24"
        color="#E1E2E5"
        variant="Bold"
        onClick={() => setSiderCollapsed(false)}
      />
    )

  return (
    <CloseIcon
      size="24"
      color="#A3A5AE"
      variant="Bold"
      onClick={() => setSiderCollapsed(true)}
    />
  )
}

function Header({ config }: HeaderProps) {
  return (
    <HeaderConfigContext.Provider value={config}>
      <div className="a8-pkg-header-wrapper">
        <div className="a8-pkg-header-container">
          <div className="a8-pkg-header-brand">
            <Flex gap={16} align="center">
              <div className="a8-pkg-header--sider-toggle">
                <MobileSiderToggle />
              </div>

              <a href="/">
                <Brand />
              </a>
            </Flex>
          </div>

          <UserNavMenu />
        </div>
      </div>
    </HeaderConfigContext.Provider>
  )
}

export default Header
