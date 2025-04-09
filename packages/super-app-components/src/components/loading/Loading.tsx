import {
  LoadingBallRotating,
  LoadingBallSpin,
  LoadingCupertino,
  LoadingMaterial,
  LoadingSync,
} from '@/assets/icons'

import type { BaseIconProps } from '@/types/icon.type'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils'

type LoadingVariant =
  | 'ball-rotate'
  | 'ball-spin'
  | 'cupertino'
  | 'material'
  | 'sync'

export type LoadingProps = {
  variant?: LoadingVariant
  type?: 'primary' | 'neutral'
} & BaseIconProps

const loadingVariants = cva('', {
  variants: {
    type: {
      primary: '*:fill-primary',
      neutral: '*:fill-neutral-900',
    },
  },
})

function Loading({
  variant = 'material',
  type = 'primary',
  className: customCls,
  ...props
}: LoadingProps) {
  const className = cn(loadingVariants({ type }), customCls)

  switch (variant) {
    case 'material':
      return <LoadingMaterial className={className} {...props} />
    case 'ball-rotate':
      return <LoadingBallRotating className={className} {...props} />
    case 'ball-spin':
      return <LoadingBallSpin className={className} {...props} />
    case 'cupertino':
      return <LoadingCupertino className={className} {...props} />
    case 'sync':
      return <LoadingSync className={className} {...props} />
    default:
      return <LoadingMaterial className={className} {...props} />
  }
}

export default Loading
