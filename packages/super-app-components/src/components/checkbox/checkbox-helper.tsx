import { cva } from 'class-variance-authority'

export const checkboxVariants = cva(
  'appearance-none rounded-sm border border-solid transition-colors duration-200 ease-in-out',
  {
    variants: {
      size: {
        xxxs: 'size-4',
        xxs: 'size-5',
      },
      checked: {
        true: '',
        false: '',
      },
      variant: {
        solid: [
          'checked:bg-primary hover:bg-primary-600 bg-transparent',
          'checked:border-primary hover:border-primary-600 border-neutral-200',
        ],
        outline: [
          'hover:bg-primary-800 bg-transparent checked:bg-transparent',
          'checked:border-primary hover:border-primary border-neutral-200',
        ],
        ghost:
          'checked:bg-primary border-neutral-200 bg-transparent hover:border-neutral-100',
        transparent: '!bg-transparent',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'transparent',
        checked: true,
        class: 'border-none',
      },
      {
        variant: 'solid',
        checked: false,
        class: '!bg-neutral-25 border-neutral-50 hover:border-neutral-100',
      },
      {
        variant: 'solid',
        checked: true,
        disabled: true,
        class: '!bg-neutral-25 !border-neutral-25',
      },
      {
        variant: 'outline',
        checked: true,
        disabled: true,
        class: '!border-neutral-50 !bg-transparent',
      },
    ],
    defaultVariants: {
      size: 'xxs',
      disabled: false,
      variant: 'solid',
    },
  },
)

export const checkboxIconVariants = cva('pointer-events-none absolute', {
  variants: {
    size: {
      xxxs: 'size-2.5',
      xxs: 'size-3',
    },
    variant: {
      solid: 'text-black',
      outline: 'text-primary',
      ghost: 'text-black',
      transparent: 'text-primary',
    },
    disabled: {
      true: '',
      false: '',
    },
    checked: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      checked: true,
      disabled: true,
      class: '!text-neutral-50',
    },
    {
      variant: 'outline',
      checked: true,
      disabled: true,
      class: 'border-neutral-50 !text-neutral-50',
    },
  ],
  defaultVariants: {
    size: 'xxs',
    variant: 'solid',
    disabled: false,
    checked: false,
  },
})
