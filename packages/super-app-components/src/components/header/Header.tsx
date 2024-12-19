import { Flex } from 'antd'
import { Menu as MenuIcon, CloseCircle as CloseIcon } from 'iconsax-react'

import { InternalConnectButton } from '../connect-button'
import { Brand } from 'assets/icons'

import useIsMobile from 'hooks/useIsMobile'
import { useCollapseStore } from 'components/sider/stores/collapse.store'

function MobileSiderToggle() {
  const isMobile = useIsMobile()
  const { siderCollapsed, setSiderCollapsed } = useCollapseStore()

  if (!isMobile) return null

  if (siderCollapsed)
    return (
      <MenuIcon
        size="24"
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

function Header() {
  return (
    <div className="a8-pkg-header-wrapper">
      <div className="a8-pkg-header-container">
        <div className="a8-pkg-header-brand">
          <Flex gap={16} align="center">
            <div className="a8-pkg-header--sider-toggle">
              <MobileSiderToggle />
            </div>

            <Brand />
          </Flex>
        </div>

        <InternalConnectButton />
      </div>
    </div>
  )
}

export default Header
