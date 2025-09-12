import { cva } from 'class-variance-authority'

export const radioOuterVariants = cva(
  'mr-2 flex items-center justify-center rounded-full',
  {
    variants: {
      size: {
        sm: 'size-4 border border-[1.2px]',
        md: 'size-5 border border-[1.6px]',
        lg: 'size-6 border border-[2px]',
      },
      checked: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        className: 'bg-neutral-0 cursor-not-allowed border-neutral-50',
      },
      {
        checked: true,
        disabled: false,
        className: 'border-primary bg-neutral-0',
      },
      {
        checked: false,
        disabled: true,
        className:
          'cursor-not-allowed border-neutral-100 bg-neutral-50 hover:bg-transparent',
      },
      {
        checked: false,
        disabled: false,
        className: 'bg-neutral-0 hover:bg-neutral-25 border-neutral-50',
      },
    ],
    defaultVariants: {
      size: 'md',
      checked: false,
      disabled: false,
    },
  },
)

export const radioDotVariants = cva(
  'bg-primary rounded-full transition-transform duration-200',
  {
    variants: {
      size: {
        sm: 'size-2',
        md: 'size-[10px]',
        lg: 'size-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)
