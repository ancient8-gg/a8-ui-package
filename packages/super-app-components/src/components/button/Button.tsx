import {
  type ButtonHTMLAttributes,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react'

import { buttonVariants } from './button-helper'
import { cn } from '@/utils'

type ButtonType = 'primary' | 'neutral'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type ButtonVariant = 'solid' | 'lightSolid' | 'outline' | 'ghost' | 'text'
type ButtonHtmlType = 'submit' | 'button' | 'reset'
type ButtonVariants = {
  size?: ButtonSize
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
}

export type BaseButtonProps = {
  classNames?: { icon: string }
  htmlType?: ButtonHtmlType
  loading?: boolean | { delay?: number; icon?: ReactNode }
  [key: `data-${string}`]: string
  block?: boolean
}

type MergedHTMLAttributes = Omit<
  HTMLAttributes<HTMLElement> & ButtonHTMLAttributes<HTMLElement>,
  'type' | 'color'
>

export type ButtonProps = MergedHTMLAttributes &
  ButtonVariants &
  BaseButtonProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    type,
    variant,
    size,
    className: customCls,
    disabled,
    block,
    ...rest
  } = props

  const className = cn(
    buttonVariants({ type, variant, size, disabled, block }),
    customCls,
  )

  return (
    <button className={className} disabled={disabled} {...rest} ref={ref}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
