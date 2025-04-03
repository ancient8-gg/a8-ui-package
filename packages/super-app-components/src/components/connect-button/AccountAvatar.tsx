import { useMemo } from 'react'

import { Avatar } from 'antd'

import { emojiAvatarForAddress } from '@/utils/emoji-avatar'

type AccountAvatarProps = {
  address?: string
  ensAvatar?: string
  size?: number
}

function AccountAvatar({ address, ensAvatar, size = 24 }: AccountAvatarProps) {
  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address ?? ''),
    [address],
  )

  if (!ensAvatar)
    return (
      <Avatar
        style={{ backgroundColor, fontSize: (size * 2) / 3 }}
        size={size}
        className="a8-pkg-account-avatar"
      >
        {emoji}
      </Avatar>
    )

  return (
    <Avatar size={size} src={ensAvatar} className="a8-pkg-account-avatar" />
  )
}

export default AccountAvatar
