import {
  type ButtonHTMLAttributes,
  forwardRef,
  Fragment,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
} from 'react'

import { buttonVariants } from './button-helper'
import LoadingIconDefault from './LoadingIconDefault'

import { cn } from '@/utils'

type ButtonType = 'primary' | 'neutral'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
type ButtonVariant = 'solid' | 'light-solid' | 'outline' | 'ghost' | 'text'
type ButtonHtmlType = 'submit' | 'button' | 'reset'
type ButtonVariants = {
  size?: ButtonSize
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
}

export type BaseButtonProps = {
  classNames?: { loading?: string }
  htmlType?: ButtonHtmlType
  loading?: boolean | { delay?: number }
  icons?: {
    loading?: ReactNode
    prefix?: ReactNode
    suffix?: ReactNode
  }
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

type LoadingConfigType = {
  loading: boolean
  delay: number
}

function getLoadingConfig(
  loading: BaseButtonProps['loading'],
): LoadingConfigType {
  if (typeof loading === 'object' && loading) {
    let delay = loading?.delay
    delay = !Number.isNaN(delay) && typeof delay === 'number' ? delay : 0
    return {
      loading: delay <= 0,
      delay,
    }
  }

  return {
    loading: !!loading,
    delay: 0,
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    type,
    htmlType = 'button',
    variant = 'solid',
    size = 'md',
    className: customCls,
    disabled,
    block,
    loading = false,
    icons,
    classNames,
    onClick,
    ...rest
  } = props
  const [innerLoading, setLoading] = useState(false)

  const loadingOrDelay = useMemo<LoadingConfigType>(
    () => getLoadingConfig(loading),
    [loading],
  )

  const className = cn(
    buttonVariants({
      type,
      variant,
      size,
      disabled,
      block,
      loading: innerLoading,
    }),
    customCls,
  )

  // ========================= Effect =========================
  // Loading
  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout> | null = null
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null
        setLoading(true)
      }, loadingOrDelay.delay)
    } else {
      setLoading(loadingOrDelay.loading)
    }

    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer)
        delayTimer = null
      }
    }

    return cleanupTimer
  }, [loadingOrDelay])

  // ========================= Events =========================
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (disabled || innerLoading) {
        e.preventDefault()
        return
      }

      onClick?.(e)
    },
    [disabled, innerLoading, onClick],
  )

  // ========================= Render =========================
  const buttonContent = useMemo(() => {
    if (innerLoading) {
      if (icons?.loading) return <Fragment>{icons.loading}</Fragment>

      return (
        <LoadingIconDefault
          className={classNames?.loading}
          type={type}
          variant={variant}
          size={size}
        />
      )
    }

    return <span>{children}</span>
  }, [
    children,
    classNames?.loading,
    icons?.loading,
    innerLoading,
    size,
    type,
    variant,
  ])

  return (
    <button
      ref={ref}
      type={htmlType}
      className={className}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {icons?.prefix}

      {buttonContent}

      {icons?.suffix}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
