import React, {
  forwardRef,
  MouseEvent,
  useCallback,
  type HTMLAttributes,
} from 'react'

import { cn } from '@/utils'
import {
  chipIconVariants,
  chipRemoveIconVariants,
  chipVariants,
} from './chip-helper'

import { CloseIcon, InformationIcon, CheckedCircleIcon } from '@/assets/icons'

type ChipSize = 'xs' | 'sm'
type ChipType = 'primary' | 'neutral'
type ChipVariant = 'solid' | 'outline'

export type ChipProps = {
  className?: string
  size?: ChipSize
  type?: ChipType
  variant?: ChipVariant
  checked?: boolean
  disabled?: boolean
  showIcon?: boolean
  children: React.ReactNode
  icon?: React.ReactNode
  closeIcon?: boolean
  onClose?: React.MouseEventHandler<HTMLSpanElement>
} & HTMLAttributes<HTMLSpanElement>

const Chip = forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      className,
      size,
      type,
      variant,
      checked,
      children,
      closeIcon = false,
      icon,
      showIcon = false,
      disabled = false,
      onClose,
      onClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (disabled) {
          event.stopPropagation()
          return
        }

        onClick?.(event)
      },
      [disabled, onClick],
    )

    const handleClose = useCallback(
      (event: MouseEvent<HTMLSpanElement>) => {
        if (disabled) {
          event.stopPropagation()
          return
        }
        onClose?.(event)
      },
      [disabled, onClose],
    )

    return (
      <span
        ref={ref}
        className={cn(
          chipVariants({
            size,
            type,
            variant,
            disabled,
            checked,
          }),
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {/* Icon */}
        {showIcon && !icon && (
          <span
            className={chipIconVariants({ type, variant, checked, disabled })}
          >
            {checked ? <CheckedCircleIcon /> : <InformationIcon />}
          </span>
        )}

        {showIcon && !!icon && (
          <span
            className={chipIconVariants({ type, variant, checked, disabled })}
          >
            {icon}
          </span>
        )}

        {/* Content */}
        {children}

        {/* Remove Icon */}
        {closeIcon && (
          <span
            onClick={handleClose}
            className={chipRemoveIconVariants({
              type,
              variant,
              checked,
              disabled,
            })}
          >
            <CloseIcon />
          </span>
        )}
      </span>
    )
  },
)

Chip.displayName = 'Chip'

export default Chip
