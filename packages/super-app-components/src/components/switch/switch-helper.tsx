import { cva } from 'class-variance-authority'

export const switchTrackVariants = cva(
  'relative inline-flex items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none',
  {
    variants: {
      size: {
        sm: 'h-[22px] w-10',
        md: 'h-[30px] w-[56px]',
        lg: 'h-10 w-[82px]',
      },
      checked: {
        true: 'bg-primary',
        false: 'bg-neutral-25',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        class: 'bg-primary-600',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  },
)

export const switchThumbVariants = cva(
  'absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-in-out',
  {
    variants: {
      size: {
        sm: 'size-[14px]',
        md: 'size-[21px]',
        lg: 'size-[28px]',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        size: 'sm',
        checked: false,
        class: 'left-[4px]',
      },
      {
        size: 'sm',
        checked: true,
        class: 'right-[4px]',
      },
      {
        size: 'md',
        checked: false,
        class: 'left-[6px]',
      },
      {
        size: 'md',
        checked: true,
        class: 'right-[6px]',
      },
      {
        size: 'lg',
        checked: false,
        class: 'left-[8px]',
      },
      {
        size: 'lg',
        checked: true,
        class: 'right-[8px]',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
    },
  },
)
