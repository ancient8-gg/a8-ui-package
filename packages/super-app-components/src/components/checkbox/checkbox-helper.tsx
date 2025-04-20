import { cva } from 'class-variance-authority'

export const checkboxVariants = cva(
  'appearance-none rounded-sm border border-solid transition-colors duration-200 ease-in-out',
  {
    variants: {
      size: {
        xs: 'size-3',
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
      checked: {
        true: 'checked:border-primary hover:!border-primary-600 hover:bg-primary-600',
      },
      variant: {
        solid:
          'checked:bg-primary border-neutral-200 bg-transparent hover:border-neutral-100',
        outline:
          'hover:border-primary hover:bg-primary-800 border-neutral-200 bg-transparent checked:bg-transparent',
      },
      disabled: {
        true: 'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    defaultVariants: {
      size: 'md',
      disabled: false,
      variant: 'solid',
    },
  },
)

export const checkboxIconVariants = cva('pointer-events-none absolute', {
  variants: {
    size: {
      xs: 'size-2',
      sm: 'size-2.5',
      md: 'size-3',
      lg: 'size-3.5',
    },
    variant: {
      solid: 'text-black',
      outline: 'text-primary',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
})
