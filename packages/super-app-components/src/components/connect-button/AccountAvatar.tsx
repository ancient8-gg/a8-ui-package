import { useMemo } from 'react'

import { cn, emojiAvatarForAddress } from '@/utils'

type AccountAvatarProps = {
  address?: string
  ensAvatar?: string
  size?: number
  className?: string
}

function AccountAvatar({
  address,
  ensAvatar,
  size = 18,
  className,
}: AccountAvatarProps) {
  const { color: backgroundColor, emoji } = useMemo(
    () => emojiAvatarForAddress(address ?? ''),
    [address],
  )

  if (!ensAvatar)
    return (
      <div
        style={{
          backgroundColor,
          fontSize: (size * 2) / 3,
          width: size,
          height: size,
        }}
        className={cn(
          'flex items-center justify-center rounded-full',
          className,
        )}
      >
        <span>{emoji}</span>
      </div>
    )

  return (
    <img
      style={{ width: size, height: size }}
      src={ensAvatar}
      className={cn('rounded-full', className)}
      alt="avatar"
    />
  )
}

export default AccountAvatar
