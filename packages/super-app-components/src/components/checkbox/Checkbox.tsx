import { forwardRef, useCallback, type InputHTMLAttributes } from 'react'

import { cn } from '@/utils'

import { CheckedIcon } from '@/assets/icons'

type CheckboxSize = 'xs' | 'sm' | 'md' | 'lg'

export type CheckboxProps = {
  classNames?: {
    wrapper?: string
    input?: string
    icon?: string
  }
  size?: CheckboxSize
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>

const sizeClasses: Record<CheckboxSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const iconSizeClasses: Record<CheckboxSize, string> = {
  xs: 'h-2 w-2',
  sm: 'h-2.5 w-2.5',
  md: 'h-3 w-3',
  lg: 'h-3.5 w-3.5',
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    classNames,
    disabled,
    checked,
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
          'transition-colors duration-200 ease-in-out',
          'appearance-none rounded-sm border border-solid border-[#424242] bg-[#141414]',
          'checked:border-[#bbdc67] checked:bg-[#bbdc67] hover:border-[#bbdc67]',
          !disabled ? 'cursor-pointer' : 'cursor-not-allowed',
          sizeClasses[size],
          classNames?.input,
        )}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...rest}
      />

      {checked && (
        <span className={cn('pointer-events-none absolute', classNames?.icon)}>
          <CheckedIcon className={cn(iconSizeClasses[size])} />
        </span>
      )}
    </span>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
