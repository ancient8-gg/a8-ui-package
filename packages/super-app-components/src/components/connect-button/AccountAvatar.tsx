import { useMemo } from 'react'

import { Avatar } from 'antd'

import { emojiAvatarForAddress } from 'utils/emoji-avatar'

type AccountAvatarProps = {
  address?: string
  ensAvatar?: string
}

function AccountAvatar({ address, ensAvatar }: AccountAvatarProps) {
  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address ?? ''),
    [address],
  )

  if (!ensAvatar)
    return (
      <Avatar
        style={{ backgroundColor }}
        size={24}
        className="a8-pkg-account-avatar"
      >
        {emoji}
      </Avatar>
    )

  return <Avatar size={24} src={ensAvatar} className="a8-pkg-account-avatar" />
}

export default AccountAvatar
