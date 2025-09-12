import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex cursor-pointer items-center justify-center shadow-none transition-all',
  {
    variants: {
      type: {
        primary: 'text-primary',
        neutral: 'text-white',
      },
      variant: {
        solid: '',
        'light-solid': '',
        outline: '',
        ghost: '',
        text: '!h-fit !p-0',
      },
      size: {
        xs: 'h-btn-xs rounded-xs px-btn-xs gap-1 text-[10px]/[1.2]',
        sm: 'h-btn-sm px-btn-sm gap-1 rounded-sm text-[14px]/[1.2] font-medium',
        md: 'h-btn-md px-btn-md gap-1.5 rounded-md text-[14px]/[1.2] font-medium',
        lg: 'h-btn-lg px-btn-lg gap-1.5 rounded-lg text-[16px]/[1.2] font-bold',
      },
      disabled: {
        true: '!cursor-not-allowed',
      },
      loading: {
        true: '!cursor-not-allowed',
      },
      block: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      // primary
      {
        type: 'primary',
        variant: 'solid',
        class: 'bg-primary hover:bg-primary-600 text-black',
      },
      {
        type: 'primary',
        variant: 'light-solid',
        class: 'text-primary bg-primary-800 hover:bg-primary-700',
      },
      {
        type: 'primary',
        variant: 'outline',
        class: [
          'border-primary bg-neutral-0 border border-solid',
          'hover:bg-primary-800',
        ],
      },
      {
        type: 'primary',
        variant: 'ghost',
        class: 'hover:bg-primary-800 bg-transparent',
      },
      // neutral
      {
        type: 'neutral',
        variant: 'solid',
        class: 'bg-neutral-25 hover:bg-neutral-50',
      },
      {
        type: 'neutral',
        variant: 'light-solid',
        class: 'bg-neutral-50 hover:bg-neutral-100',
      },
      {
        type: 'neutral',
        variant: 'outline',
        class: [
          'bg-neutral-0 border border-solid border-white',
          'hover:border-neutral hover:bg-neutral-50',
        ],
      },
      {
        type: 'neutral',
        variant: 'ghost',
        class: 'bg-transparent hover:bg-neutral-50',
      },
      // disabled
      {
        type: ['primary', 'neutral'],
        variant: ['solid', 'light-solid'],
        disabled: true,
        class: 'bg-neutral-25 hover:bg-neutral-25 text-neutral-100',
      },
      {
        type: ['primary', 'neutral'],
        variant: 'outline',
        disabled: true,
        class: [
          'bg-neutral-0 border border-solid border-neutral-50 text-neutral-50',
          'hover:bg-neutral-0 hover:border-neutral-50',
        ],
      },
      {
        type: ['primary', 'neutral'],
        variant: ['ghost', 'text'],
        disabled: true,
        class: [
          'bg-transparent text-neutral-50',
          'hover:border-neutral-50 hover:bg-transparent',
        ],
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'solid',
      type: 'neutral',
    },
  },
)
