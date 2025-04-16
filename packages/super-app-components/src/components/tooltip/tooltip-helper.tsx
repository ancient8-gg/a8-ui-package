import { cva } from 'class-variance-authority'

export const tooltipContentVariants = cva(
  'absolute z-10 whitespace-nowrap rounded-md text-white transition-opacity',
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
        right: 'left-full top-1/2 ml-2 -translate-y-1/2',
        bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
        left: 'right-full top-1/2 mr-2 -translate-y-1/2',
      },
      size: {
        sm: 'p-2 text-[10px]/[14px]',
        md: 'p-[10px] text-xs/[18px]',
        lg: 'p-3 text-sm/[20px]',
      },
      variant: {
        solid: 'bg-neutral-25',
        plain: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'solid',
      position: 'top',
    },
  },
)

export const tooltipArrowVariants = cva('absolute h-0 w-0', {
  variants: {
    position: {
      top: 'bottom-1 left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent',
      bottom:
        'left-1/2 top-1 -translate-x-1/2 border-x-4 border-b-4 border-x-transparent',
      left: 'right-1 top-1/2 -translate-y-1/2 border-y-4 border-l-4 border-y-transparent',
      right:
        'left-1 top-1/2 -translate-y-1/2 border-y-4 border-r-4 border-y-transparent',
    },
  },
  compoundVariants: [
    {
      position: 'top',
      class: 'border-t-neutral-25',
    },
    {
      position: 'bottom',
      class: 'border-b-neutral-25',
    },
    {
      position: 'left',
      class: 'border-l-neutral-25',
    },
    {
      position: 'right',
      class: 'border-r-neutral-25',
    },
  ],
  defaultVariants: {
    position: 'top',
  },
})
