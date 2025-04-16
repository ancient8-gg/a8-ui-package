import React, { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'

import { tooltipArrowVariants, tooltipContentVariants } from './tooltip-helper'
import { cn } from '@/utils'

type TooltipSize = 'sm' | 'md' | 'lg'
type TooltipVariant = 'plain' | 'solid'
type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export type TooltipProps = {
  content: ReactNode
  size?: TooltipSize
  variant?: TooltipVariant
  position?: TooltipPosition
  classNames?: {
    wrapper?: string
    content?: string
  }
} & Omit<HTMLAttributes<HTMLDivElement>, 'content'>

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      variant = 'solid',
      size = 'sm',
      position = 'top',
      classNames,
      children,
      content,
      ...rest
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false)

    return (
      <div
        ref={ref}
        className={cn('relative inline-block', classNames?.wrapper)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        {...rest}
      >
        {children}
        {visible && (
          <div
            className={cn(
              'absolute z-10',
              position === 'top' &&
                'bottom-full left-1/2 mb-2 -translate-x-1/2',
              position === 'bottom' &&
                'left-1/2 top-full mt-2 -translate-x-1/2',
              position === 'left' && 'right-full top-1/2 mr-2 -translate-y-1/2',
              position === 'right' && 'left-full top-1/2 ml-2 -translate-y-1/2',
            )}
          >
            {variant === 'solid' && (
              <span className={tooltipArrowVariants({ position })} />
            )}
            <div
              className={cn(
                tooltipContentVariants({ variant, size, position }),
                classNames?.content,
              )}
            >
              {content}
            </div>
          </div>
        )}
      </div>
    )
  },
)

Tooltip.displayName = 'Tooltip'

export default Tooltip
