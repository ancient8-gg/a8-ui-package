import { useEffect, useState } from 'react'
import { useChains, useSwitchChain } from 'wagmi'

import { Flex, Image } from 'antd'

import type { Chain as RainbowKitChain } from '@rainbow-me/rainbowkit'

type SwitchChainProps = {
  currentChainId?: number
}

function SwitchChain({ currentChainId }: SwitchChainProps) {
  const supportChains = useChains()
  const { switchChain } = useSwitchChain()

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Flex gap={4} className="a8-pkg-switch-chain">
      {supportChains.map(({ id, iconUrl }: RainbowKitChain, key) => {
        return (
          <Flex
            align="center"
            justify="center"
            className="a8-pkg-switch-chain--chain-item"
            key={key}
            onClick={() => switchChain({ chainId: id })}
          >
            <Image
              src={(iconUrl as string) ?? ''}
              preview={false}
              rootClassName="a8-pkg-switch-chain--chain-item-icon"
            />

            {currentChainId === id && (
              <div
                className="a8-pkg-switch-chain--chain-item--indicator"
                suppressHydrationWarning
              ></div>
            )}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default SwitchChain
