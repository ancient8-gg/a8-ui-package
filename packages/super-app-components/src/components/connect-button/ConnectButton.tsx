import * as React from 'react'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import { Button, type ButtonProps } from 'antd'
import clsx from 'clsx'

import AccountAvatar from './AccountAvatar'

export type ConnectButtonProps = {
  isSwitchChain?: boolean
  className?: string
  classNames?: {
    connect?: string
    account?: string
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
            type="text"
            onClick={openAccountModal}
            className={clsx(
              'a8-pkg-user-nav',
              className,
              classNames?.account ?? '',
            )}
          >
            <div>
              <AccountAvatar
                address={account.address}
                ensAvatar={account.ensAvatar}
              />
            </div>
          </Button>
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
})

export default InternalConnectButton
