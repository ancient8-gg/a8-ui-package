import { useMemo } from 'react'
import clsx from 'clsx'

import { emojiAvatarForAddress } from 'utils/emoji-avatar'
import { Avatar } from 'antd'

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
      <Avatar
        style={{ backgroundColor }}
        className={clsx('a8-account-avatar', className)}
      >
        {emoji}
      </Avatar>
    )

  return (
    <Avatar src={ensAvatar} className={clsx('a8-account-avatar', className)} />
  )
}

export default AccountAvatar
