import React, { forwardRef } from 'react'
import { cn } from '@/utils'
import { radioDotVariants, radioOuterVariants } from './radio-button-helper'

type RadioButtonSize = 'sm' | 'md' | 'lg'

export type RadioButtonProps = {
  value: string
  checked?: boolean
  onChange?: (value: string) => void
  disabled?: boolean
  size?: RadioButtonSize
  children?: React.ReactNode
  name?: string
  className?: string
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      value,
      checked = false,
      onChange,
      disabled = false,
      size = 'md',
      children,
      name,
      className,
    },
    ref,
  ) => {
    return (
      <label
        className={cn(
          'inline-flex cursor-pointer items-center',
          disabled && 'opacity-50',
          className,
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => !disabled && onChange?.(value)}
          className="peer sr-only"
        />

        <div className={cn(radioOuterVariants({ size, checked }))}>
          <div
            className={cn(
              radioDotVariants({ size }),
              'transition-opacity',
              checked ? 'opacity-100' : 'opacity-0',
            )}
          />
        </div>

        <span className="ml-2">{children ?? value}</span>
      </label>
    )
  },
)

RadioButton.displayName = 'RadioButton'

export default RadioButton
