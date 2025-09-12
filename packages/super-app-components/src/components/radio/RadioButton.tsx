import React, {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  useCallback,
} from 'react'

import { radioDotVariants, radioOuterVariants } from './radio-button-helper'
import { cn } from '@/utils'

type RadioButtonSize = 'sm' | 'md' | 'lg'

export type RadioButtonProps = {
  classNames?: {
    wrapper?: string
    text?: string
  }
  size?: RadioButtonSize
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

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
      classNames,
      ...rest
    },
    ref,
  ) => {
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled) {
          e.preventDefault()
          return
        }

        onChange?.(e)
      },
      [disabled, onChange],
    )

    return (
      <label
        className={cn(
          'inline-flex cursor-pointer items-center',
          disabled && 'opacity-50',
          classNames?.wrapper,
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className="peer sr-only"
          {...rest}
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

        <span className={cn('ml-2', classNames?.text)}>
          {children ?? value}
        </span>
      </label>
    )
  },
)

RadioButton.displayName = 'RadioButton'

export default RadioButton
