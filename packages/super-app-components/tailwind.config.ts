import type { Config } from 'tailwindcss'

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-500)',
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '600': 'var(--color-primary-600)',
          '800': 'var(--color-primary-800)',
          '850': 'var(--color-primary-850)',
          '900': 'var(--color-primary-900)',
          '950': 'var(--color-primary-950)',
        },
        neutral: {
          DEFAULT: 'var(--color-neutral-500)',
          '0': 'var(--color-neutral-0)',
          '50': 'var(--color-neutral-50)',
          '100': 'var(--color-neutral-100)',
          '200': 'var(--color-neutral-200)',
          '300': 'var(--color-neutral-300)',
          '400': 'var(--color-neutral-400)',
          '600': 'var(--color-neutral-600)',
          '700': 'var(--color-neutral-700)',
          '800': 'var(--color-neutral-800)',
          '900': 'var(--color-neutral-900)',
        },
      },
      screens: {
        mobile: { max: '991px' },
      },
    },
  },
  plugins: [],
} satisfies Config
