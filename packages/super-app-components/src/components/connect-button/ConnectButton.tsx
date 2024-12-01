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

import { shortenAddress } from 'utils'

export type ConnectButtonProps = {
  isSwitchChain?: boolean
  className?: string
  classNames?: {
    account?: string
    balance?: string
    connect?: string
  } & ButtonProps['classNames']
} & Omit<ButtonProps, 'classNames'>

const InternalConnectButton = React.forwardRef<
  HTMLButtonElement,
  ConnectButtonProps
>((props, ref) => {
  const { isSwitchChain, className, classNames, ...params } = props

  return (
    <RainbowKitConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        authenticationStatus,
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

        return (
          <Button
            {...params}
            ref={ref}
            onClick={openAccountModal}
            className={clsx(
              'a8-pkg-user-nav',
              className,
              classNames?.account ?? '',
            )}
          >
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

            <AccountAvatar
              address={account.address}
              ensAvatar={account.ensAvatar}
            />

            <Typography.Text className={clsx('a8-pkg-user-nav--user-name')}>
              {shortenAddress(account.address)}
            </Typography.Text>
          </Button>
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
})

export default InternalConnectButton
