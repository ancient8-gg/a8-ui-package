import * as React from 'react'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'

import { Button, type ButtonProps } from '@/components'
import AccountAvatar from './AccountAvatar'

import { cn, shortenAddress } from '@/utils'

import { WalletIcon } from '@/assets/icons'

export type ConnectButtonProps = {
  className?: string
  classNames?: {
    account?: string
    balance?: string
    connect?: string
    switch?: string
    address?: string
  } & ButtonProps['classNames']
} & Omit<ButtonProps, 'classNames'>

const InternalConnectButton = React.forwardRef<
  HTMLButtonElement,
  ConnectButtonProps
>((props, ref) => {
  const {
    size = 'md',
    variant = 'solid',
    type = 'primary',
    className,
    icons = {
      prefix: <WalletIcon />,
    },
    classNames,
    ...params
  } = props

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
              onClick={openConnectModal}
              className={cn(className, classNames?.connect)}
              size={size}
              type={type}
              variant={variant}
              icons={icons}
            >
              Connect wallet
            </Button>
          )

        if (chain?.unsupported)
          return (
            <Button
              {...params}
              ref={ref}
              onClick={openChainModal}
              className={cn(className, classNames?.switch)}
              size={size}
              type={type}
              variant={variant}
            >
              Switch network
            </Button>
          )

        return (
          <Button
            {...params}
            ref={ref}
            className={cn(
              'border-neutral-25 hover:border-neutral-25 bg-transparent hover:bg-white/10',
              'mobile:w-9',
              className,
              classNames?.account,
            )}
            size={size}
            type="neutral"
            variant="outline"
          >
            <div className="flex items-center gap-1.5">
              <div
                className={cn(
                  'mobile:!hidden flex items-center gap-1',
                  className,
                  classNames?.balance ?? '',
                )}
              >
                <img
                  className="size-[18px] rounded-full"
                  src={chain.iconUrl}
                  alt="chain-img"
                />
                <span>{account.displayBalance ?? '0'}</span>
              </div>

              <div className="mobile:!hidden bg-white/12 h-[15px] w-[1px]"></div>

              <div className="flex items-center gap-1">
                <AccountAvatar
                  address={account.address}
                  ensAvatar={account.ensAvatar}
                />

                <span className={cn('mobile:hidden', classNames?.address)}>
                  {shortenAddress(account.address)}
                </span>
              </div>
            </div>
          </Button>
        )
      }}
    </RainbowKitConnectButton.Custom>
  )
})

InternalConnectButton.displayName = 'ConnectButton'

export default InternalConnectButton
