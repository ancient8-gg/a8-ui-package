import { cva } from 'class-variance-authority'
import Loading from '@/components/loading'
import type { ButtonProps } from '@/components'
import { cn } from '@/utils'

const loadingIconDefaultVariants = cva('a8-btn-loading', {
  variants: {
    type: {
      primary: '*:fill-primary',
      neutral: '*:fill-white',
    },
    variant: {
      solid: '',
      'light-solid': '',
      outline: '',
      ghost: '',
      text: '',
    },
    size: {
      xs: 'size-4',
      sm: 'size-5',
      md: 'size-6',
      lg: 'size-[28px]',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      variant: 'solid',
      class: '*:fill-neutral-900',
    },
  ],
})

type LoadingIconDefaultProps = { className?: string } & Pick<
  ButtonProps,
  'type' | 'variant' | 'size'
>

function LoadingIconDefault(props: LoadingIconDefaultProps) {
  const { className, ...iconProps } = props

  return (
    <Loading className={cn(loadingIconDefaultVariants(iconProps), className)} />
  )
}

export default LoadingIconDefault
