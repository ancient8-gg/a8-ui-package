import * as React from 'react'
import { ConnectButton as RainbowKitConnectButton } from '@rainbow-me/rainbowkit'
import clsx from 'clsx'

import AccountAvatar from './AccountAvatar'

import './index.scss'

export type ConnectButtonProps = {
  isSwitchChain?: boolean
  className?: string
  classNames?: {
    connect?: string
    account?: string
  }
} & Omit<React.HTMLAttributes<HTMLButtonElement>, 'title'>

const ConnectButton = React.forwardRef<HTMLButtonElement, ConnectButtonProps>(
  (props, ref) => {
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
              <button
                type="button"
                onClick={openConnectModal}
                className={clsx(
                  'a8-connect-btn',
                  className,
                  classNames?.connect ?? '',
                )}
                {...params}
                ref={ref}
              >
                Connect wallet
              </button>
            )

          return (
            <button
              type="button"
              onClick={openAccountModal}
              className={clsx(
                'a8-user-nav',
                className,
                classNames?.account ?? '',
              )}
              ref={ref}
              {...params}
            >
              <div>
                <AccountAvatar
                  address={account.address}
                  ensAvatar={account.ensAvatar}
                />
              </div>
            </button>
          )
        }}
      </RainbowKitConnectButton.Custom>
    )
  },
)
export default ConnectButton
