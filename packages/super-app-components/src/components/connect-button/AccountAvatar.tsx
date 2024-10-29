import { useMemo } from 'react'
import clsx from 'clsx'

import { emojiAvatarForAddress } from 'utils/emoji-avatar'

import './account-avatar.scss'

type AccountAvatarProps = {
  address?: string
  ensAvatar?: string
  className?: string
}

function AccountAvatar({ address, ensAvatar, className }: AccountAvatarProps) {
  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address ?? ''),
    [address],
  )

  if (!ensAvatar)
    return (
      <div
        style={{ backgroundColor }}
        className={clsx('a8-account-avatar', className)}
      >
        {emoji}
      </div>
    )

  return (
    <div className={clsx('a8-account-avatar', className)}>
      <img src={ensAvatar} alt="avatar" />
    </div>
  )
}

export default AccountAvatar
