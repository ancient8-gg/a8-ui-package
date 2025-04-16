import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        full: 'var(--border-radius-full)',
        sharp: 'var(--border-radius-sharp)',
        xxs: 'var(--border-radius-xxs)',
        xs: 'var(--border-radius-xs)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
        xl: 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
        '3xl': 'var(--border-radius-3xl)',
        '4xl': 'var(--border-radius-4xl)',
        '5xl': 'var(--border-radius-5xl)',
        '6xl': 'var(--border-radius-6xl)',
      },
      padding: {
        'btn-xs': 'var(--button-padding-xs)',
        'btn-sm': 'var(--button-padding-sm)',
        'btn-md': 'var(--button-padding-md)',
        'btn-lg': 'var(--button-padding-lg)',
      },
      height: {
        'btn-xs': 'var(--button-height-xs)',
        'btn-sm': 'var(--button-height-sm)',
        'btn-md': 'var(--button-height-md)',
        'btn-lg': 'var(--button-height-lg)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-500)',
          '25': 'var(--color-primary-25)',
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '400': 'var(--color-primary-400)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral-500)',
          '0': 'var(--color-neutral-0)',
          '25': 'var(--color-neutral-25)',
          '50': 'var(--color-neutral-50)',
          '100': 'var(--color-neutral-100)',
          '200': 'var(--color-neutral-200)',
          '300': 'var(--color-neutral-300)',
          '400': 'var(--color-neutral-400)',
          '700': 'var(--color-neutral-700)',
          '800': 'var(--color-neutral-800)',
          '900': 'var(--color-neutral-900)',
        },
        success: {
          DEFAULT: '',
        },
      },
      opacity: {
        4: '0.04',
        6: '0.06',
        8: '0.08',
        12: '0.12',
      },
      screens: {
        mobile: { max: '991px' },
      },
    },
  },
  plugins: [],
} satisfies Config
