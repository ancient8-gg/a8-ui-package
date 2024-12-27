import { useMemo, useCallback, useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import copy from 'copy-to-clipboard'

import {
  type MenuProps,
  Dropdown,
  Image,
  Flex,
  Typography,
  Tooltip,
} from 'antd'
import Icon from '@ant-design/icons'

import {
  InternalConnectButton,
  InternalAccountAvatar,
} from 'components/connect-button'

import { useUserNavItems } from './hooks/useUserNavItems'
import { useUsdPrice } from 'hooks/useUsdPrice'
import useIsMobile from 'hooks/useIsMobile'

import { shortenAddress, formatNumber } from 'utils'

import { CloseCircle as CloseIcon } from 'iconsax-react'
import {
  LogoutIcon,
  AvatarBorder,
  AvatarBorderDeco,
  CopyIcon,
  CopiedIcon,
  UserNavHr,
} from 'assets/icons'
import { A8Token, EthToken } from 'assets/logo'
import { useA8TokenBalance } from 'components/header/hooks/useA8TokenBalance'

function UserNavMenu() {
  const { connector, address, isConnected, chain } = useAccount()
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)
  const [isCopiedAddress, setIsCopiedAddress] = useState(false)

  const { data } = useUserNavItems()
  const { ancient8: ancient8Price, ethereum: ethereumPrice } = useUsdPrice()
  const a8TokenBalance = useA8TokenBalance()

  const handleDisconnect = useCallback(
    async () => await connector?.disconnect(),
    [connector],
  )

  const items: MenuProps['items'] = useMemo(() => {
    const menuData = data.map(({ id, icon, title, linkTo }) => ({
      key: id,
      label: (
        <a href={linkTo} target="_self" rel="noreferrer noopener">
          <Flex gap={8} align="center">
            {icon && <Image width={20} src={icon} alt="icon" preview={false} />}
            <div>{title}</div>
          </Flex>
        </a>
      ),
      onClick: () => {},
    }))

    menuData.push({
      key: -1,
      label: (
        <Flex gap={8}>
          <Icon component={LogoutIcon} />
          Disconnect
        </Flex>
      ),
      onClick: () => {
        handleDisconnect().catch((error) => console.log(error))
      },
    })

    return menuData
  }, [data, handleDisconnect])

  useEffect(() => {
    setOpen(false)
  }, [isMobile])

  useEffect(() => {
    if (!chain) setOpen(false)
  }, [chain])

  return (
    <RainbowKitConnectButton.Custom>
      {({ account }) => (
        <Dropdown
          open={!isConnected ? false : isMobile ? open : undefined}
          menu={{ items }}
          trigger={['click']}
          dropdownRender={(menu) => {
            return (
              <Flex
                vertical
                align="center"
                className="a8-pkg-user-nav-container"
                gap={24}
              >
                {isMobile && (
                  <CloseIcon
                    size="24"
                    color="#A3A5AE"
                    variant="Bold"
                    onClick={() => setOpen(false)}
                    className="a8-pkg-user-nav-close-icon"
                  />
                )}

                <Flex
                  align="center"
                  justify="center"
                  className="a8-pkg-user-nav-avatar"
                >
                  <InternalAccountAvatar address={address} size={100} />
                  <AvatarBorder />
                  <AvatarBorderDeco />
                </Flex>

                <Flex
                  vertical
                  align="center"
                  className="a8-pkg-user-nav-title"
                  gap={12}
                >
                  <UserNavHr />
                  <Typography.Text className="a8-pkg-user-nav-title-text">
                    ECOSYSTEM CITIZEN
                  </Typography.Text>
                  <UserNavHr className="rotate-180" />
                </Flex>

                <Flex vertical className="a8-pkg-user-nav-account" gap={12}>
                  <Typography.Text
                    // copyable={{
                    //   text: address,
                    //   icon: [
                    //     <Icon component={CopyIcon} key="Copy" />,
                    //     <Icon component={CopiedIcon} key="Copied" />,
                    //   ],
                    // }}
                    className="a8-pkg-user-nav-account--address"
                    onClick={() => {
                      setIsCopiedAddress(true)
                      copy(address ?? '')
                      setTimeout(() => {
                        setIsCopiedAddress(false)
                      }, 3000)
                    }}
                  >
                    {shortenAddress(address)}
                    {!isCopiedAddress ? (
                      <Tooltip
                        title="Copy"
                        trigger={['hover']}
                        open={isCopiedAddress ? true : undefined}
                      >
                        <Icon component={CopyIcon} key="Copy" />
                      </Tooltip>
                    ) : (
                      <Tooltip
                        title="Copied"
                        open={isCopiedAddress ? true : undefined}
                      >
                        <Icon component={CopiedIcon} key="Copied" />
                      </Tooltip>
                    )}
                  </Typography.Text>

                  <Flex
                    className="a8-pkg-user-nav-account--balance"
                    align="center"
                    justify="space-between"
                  >
                    <Flex gap={4} align="center">
                      <Typography.Text className="a8-pkg-user-nav-account--balance--token">
                        {formatNumber(Number(account?.balanceFormatted))}
                      </Typography.Text>

                      <Icon component={EthToken} />
                    </Flex>

                    <Typography.Text className="a8-pkg-user-nav-account--balance--usd">
                      $
                      {formatNumber(
                        Number(account?.balanceFormatted) * ethereumPrice,
                      )}
                    </Typography.Text>
                  </Flex>

                  <Flex
                    className="a8-pkg-user-nav-account--balance"
                    align="center"
                    justify="space-between"
                  >
                    <Flex gap={4} align="center">
                      <Typography.Text className="a8-pkg-user-nav-account--balance--token">
                        {formatNumber(Number(a8TokenBalance))}
                      </Typography.Text>

                      <Icon component={A8Token} />
                    </Flex>

                    <Typography.Text className="a8-pkg-user-nav-account--balance--usd">
                      ${formatNumber(Number(a8TokenBalance) * ancient8Price)}
                    </Typography.Text>
                  </Flex>
                </Flex>

                <div className="a8-pkg-user-nav-menu">{menu}</div>
              </Flex>
            )
          }}
        >
          <InternalConnectButton
            onClick={isMobile ? () => setOpen(true) : undefined}
          />
        </Dropdown>
      )}
    </RainbowKitConnectButton.Custom>
  )
}

export default UserNavMenu
