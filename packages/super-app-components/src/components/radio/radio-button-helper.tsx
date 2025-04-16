import { cva } from 'class-variance-authority'

export const radioOuterVariants = cva(
  'mr-2 flex items-center justify-center rounded-full border-[1.2px]',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border border-[1.2px]',
        md: 'h-5 w-5 border border-[1.6px]',
        lg: 'h-6 w-6 border border-[2px]',
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
          'hover:bg-transparent cursor-not-allowed border-neutral-100 bg-neutral-50',
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
        sm: 'h-2 w-2',
        md: 'h-[10px] w-[10px]',
        lg: 'h-3 w-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)
