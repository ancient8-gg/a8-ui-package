import React, { forwardRef, useCallback } from 'react'

import { cn } from '@/utils'
import { switchThumbVariants, switchTrackVariants } from './switch-helper'

type SwitchSize = 'sm' | 'md' | 'lg'

export type SwitchProps = {
  checked: boolean
  size?: SwitchSize
  onChange?: (checked: boolean, e: React.MouseEvent<HTMLButtonElement>) => void
  onClick?: (checked: boolean, e: React.MouseEvent<HTMLButtonElement>) => void
  classNames?: {
    wrapper?: string
    track?: string
    thumb?: string
  }
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'>

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      size = 'md',
      onClick,
      onChange,
      className,
      classNames,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(!checked, e)
        onChange?.(!checked, e)
      },
      [checked],
    )

    return (
      <div className={cn('inline-block', classNames?.wrapper)}>
        <button
          type="button"
          onClick={handleClick}
          className={cn(
            switchTrackVariants({ size, checked, disabled }),
            className,
            classNames?.track,
          )}
          ref={ref}
          {...rest}
        >
          <span
            className={cn(
              switchThumbVariants({ size, checked }),
              checked ? 'bg-[#000]' : 'bg-neutral-700',
              classNames?.thumb,
            )}
          />
        </button>
      </div>
    )
  },
)

Switch.displayName = 'Switch'

export default Switch
