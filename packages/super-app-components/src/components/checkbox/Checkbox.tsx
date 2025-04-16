import { forwardRef, useCallback, type InputHTMLAttributes } from 'react'

import { cn } from '@/utils'
import { checkboxIconVariants, checkboxVariants } from './checkbox-helper'

import { CheckedIcon } from '@/assets/icons'

type CheckboxVariant = 'solid' | 'outline'
type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg'

export type CheckboxProps = {
  classNames?: {
    wrapper?: string
    input?: string
    icon?: string
  }
  variant?: CheckboxVariant
  size?: CheckboxSize
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    classNames,
    disabled,
    checked,
    variant = 'solid',
    size = 'md',
    onChange,
    ...rest
  } = props

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        e.preventDefault()
        return
      }

      onChange?.(e)
    },
    [disabled, onChange],
  )

  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center',
        disabled && 'cursor-not-allowed opacity-50',
        classNames?.wrapper,
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          checkboxVariants({ size, checked, disabled, variant }),
          classNames?.input,
        )}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />

      {checked && (
        <span
          className={cn(
            checkboxIconVariants({ size, variant }),
            classNames?.icon,
          )}
        >
          <CheckedIcon className="size-full" />
        </span>
      )}
    </span>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
