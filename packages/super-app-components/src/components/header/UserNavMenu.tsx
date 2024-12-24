import { useMemo, useCallback, useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, ancient8Sepolia, ancient8 } from 'viem/chains'

import { type MenuProps, Dropdown, Image, Flex, Typography } from 'antd'
import Icon from '@ant-design/icons'

import {
  InternalConnectButton,
  InternalAccountAvatar,
} from 'components/connect-button'

import { useUserNavItems } from './hooks/useUserNavItems'
import { useUsdPrice } from 'hooks/useUsdPrice'
import useIsMobile from 'hooks/useIsMobile'

import { shortenAddress } from 'utils'

import { CloseCircle as CloseIcon } from 'iconsax-react'
import {
  LogoutIcon,
  AvatarBorder,
  AvatarBorderDeco,
  CopyIcon,
  CopiedIcon,
  UserNavHr,
} from 'assets/icons'

function UserNavMenu() {
  const { connector, address, isConnected } = useAccount()
  const isMobile = useIsMobile()
  const [open, setOpen] = useState(false)

  const { data } = useUserNavItems()
  const { ancient8: ancient8Price, ethereum: ethereumPrice } = useUsdPrice()

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

  return (
    <RainbowKitConnectButton.Custom>
      {({ account, chain }) => {
        const priceUSD: number =
          chain?.id === mainnet.id || chain?.id === sepolia.id
            ? ethereumPrice
            : chain?.id === ancient8Sepolia.id || chain?.id === ancient8.id
              ? ancient8Price
              : 0

        return (
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
                      copyable={{
                        text: address,
                        icon: [
                          <Icon component={CopyIcon} key="Copy" />,
                          <Icon component={CopiedIcon} key="Copied" />,
                        ],
                      }}
                      className="a8-pkg-user-nav-account--address"
                    >
                      {shortenAddress(address)}
                    </Typography.Text>

                    <Flex
                      className="a8-pkg-user-nav-account--balance"
                      align="center"
                      justify="space-between"
                    >
                      <Flex gap={4} align="center">
                        <Typography.Text className="a8-pkg-user-nav-account--balance--token">
                          {Number(account?.balanceFormatted).toLocaleString(
                            'en-US',
                            {
                              maximumFractionDigits: 3,
                            },
                          )}
                        </Typography.Text>

                        <Image
                          width={20}
                          src={chain?.iconUrl}
                          preview={false}
                        />
                      </Flex>

                      <Typography.Text className="a8-pkg-user-nav-account--balance--usd">
                        $
                        {(
                          Number(account?.balanceFormatted) * priceUSD
                        ).toLocaleString('en-US', {
                          maximumFractionDigits: 3,
                        })}
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
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
}

export default UserNavMenu
