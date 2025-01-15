import * as React from 'react'
import clsx from 'clsx'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'

import {
  Button,
  type ButtonProps,
  Flex,
  Typography,
  Avatar,
  Divider,
} from 'antd'

import AccountAvatar from './AccountAvatar'

import useIsMobile from 'hooks/useIsMobile'

import { shortenAddress } from 'utils'

export type ConnectButtonProps = {
  isSwitchChain?: boolean
  className?: string
  classNames?: {
    account?: string
    balance?: string
    connect?: string
    switch?: string
  } & ButtonProps['classNames']
} & Omit<ButtonProps, 'classNames'>

const InternalConnectButton = React.forwardRef<
  HTMLButtonElement,
  ConnectButtonProps
>((props, ref) => {
  const { isSwitchChain, className, classNames, ...params } = props
  const isMobile = useIsMobile()

  return (
    <RainbowKitConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        authenticationStatus,
        openChainModal,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        if (!connected)
          return (
            <Button
              {...params}
              ref={ref}
              type="primary"
              onClick={openConnectModal}
              className={clsx(
                'a8-pkg-connect-btn',
                className,
                classNames?.connect ?? '',
              )}
            >
              Connect wallet
            </Button>
          )

        if (chain?.unsupported)
          return (
            <Button
              {...params}
              ref={ref}
              type="primary"
              onClick={openChainModal}
              className={clsx(
                'a8-pkg-connect-btn',
                className,
                classNames?.switch ?? '',
              )}
            >
              Switch network
            </Button>
          )

        return (
          <Button
            {...params}
            ref={ref}
            className={clsx(
              'a8-pkg-user-nav-btn',
              className,
              classNames?.account ?? '',
            )}
          >
            {!isMobile && (
              <React.Fragment>
                <Flex
                  className={clsx(
                    'a8-pkg-balance',
                    className,
                    classNames?.balance ?? '',
                  )}
                  align="center"
                  gap={8}
                >
                  <Avatar size={24} src={chain.iconUrl} />
                  <Typography.Text>{account.displayBalance}</Typography.Text>
                </Flex>

                <Divider type="vertical" style={{ height: 22 }} />
              </React.Fragment>
            )}

            <AccountAvatar
              address={account.address}
              ensAvatar={account.ensAvatar}
            />

            {!isMobile && (
              <Typography.Text
                className={clsx('a8-pkg-user-nav-btn--user-name')}
              >
                {shortenAddress(account.address)}
              </Typography.Text>
            )}
          </Button>
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
})

export default InternalConnectButton
