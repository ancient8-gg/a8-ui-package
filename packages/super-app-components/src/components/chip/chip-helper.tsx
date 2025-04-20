import { cva } from 'class-variance-authority'

import { cn } from '@/utils'

export const chipVariants = cva(
  cn(
    'inline-flex items-center gap-1 whitespace-nowrap font-normal',
    'cursor-pointer transition-all duration-200 ease-in-out',
  ),
  {
    variants: {
      size: {
        xs: 'rounded-xs h-6 px-[6px] text-[10px] leading-[14px]',
        sm: 'h-9 rounded-sm px-2 text-xs leading-[18px]',
      },
      type: {
        primary: 'bg-primary hover:bg-primary-600 text-black',
        neutral: 'bg-neutral-25 text-neutral-900 hover:bg-neutral-50',
      },
      variant: {
        solid: '',
        outline: '',
      },
      checked: {
        false: '',
        true: '',
      },
      disabled: {
        true: '!cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        type: 'primary',
        variant: 'solid',
        checked: false,
        class: 'bg-primary-800 hover:bg-primary-700 text-primary',
      },
      {
        type: 'neutral',
        variant: 'solid',
        checked: false,
        class: 'bg-neutral-50 text-neutral-900 hover:bg-neutral-100',
      },
      {
        type: 'primary',
        variant: 'outline',
        checked: false,
        class: [
          'hover:bg-primary-800 text-primary bg-transparent',
          'border-primary border border-solid',
        ],
      },
      {
        type: 'neutral',
        variant: 'outline',
        checked: false,
        class: [
          'hover:text-neutral-0 bg-transparent text-neutral-900 hover:bg-[#F1F2F3]',
          'hover:border-neutral border border-solid border-neutral-50',
        ],
      },
      {
        type: 'primary',
        variant: 'outline',
        checked: true,
        class: [
          'hover:bg-primary-800 text-primary bg-transparent',
          'border-primary border border-solid',
        ],
      },
      {
        type: 'neutral',
        variant: 'outline',
        checked: true,
        class: [
          'bg-transparent hover:bg-neutral-50',
          'hover:border-neutral border border-solid border-neutral-200',
        ],
      },
      {
        type: 'neutral',
        variant: 'solid',
        disabled: true,
        class: '!bg-neutral-25 !text-neutral-50',
      },
      {
        type: 'neutral',
        variant: 'outline',
        disabled: true,
        class: '!bg-transparent !text-neutral-300',
      },
    ],
    defaultVariants: {
      size: 'sm',
      variant: 'solid',
      type: 'primary',
      checked: false,
      disabled: false,
    },
  },
)

export const chipIconVariants = cva('', {
  variants: {
    type: {
      primary: 'text-black',
      neutral: 'text-white',
    },
    variant: {
      solid: 'text-black',
      outline: 'text-primary',
    },
    checked: {
      true: '',
      false: '',
    },
    disabled: {
      false: '',
      true: '',
    },
  },
  compoundVariants: [
    {
      type: 'neutral',
      variant: 'solid',
      disabled: true,
      class: '!text-neutral-50',
    },

    {
      type: 'neutral',
      variant: 'outline',
      disabled: true,
      class: '!text-neutral-300',
    },
  ],
  defaultVariants: {
    type: 'primary',
    variant: 'solid',
    disabled: false,
  },
})

export const chipRemoveIconVariants = cva('', {
  variants: {
    type: {
      primary: '',
      neutral: '',
    },
    variant: {
      solid: '',
      outline: '',
    },
    checked: {
      true: '',
      false: '',
    },
    disabled: {
      false: '',
      true: '',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      checked: true,
      variant: 'solid',
      class: 'text-black',
    },
    {
      type: 'primary',
      checked: false,
      class: 'text-neutral-200',
    },
    {
      type: 'primary',
      checked: true,
      variant: 'outline',
      class: 'text-neutral-300',
    },
    {
      type: 'neutral',
      variant: 'outline',
      disabled: true,
      class: '!text-neutral-300',
    },
  ],
  defaultVariants: {
    type: 'primary',
    variant: 'solid',
    checked: false,
    disabled: false,
  },
})
