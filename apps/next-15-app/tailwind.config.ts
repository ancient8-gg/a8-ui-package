import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        ...defaultTheme.screens,
        mobile: { max: '991.99px' },
      },
    },
  },
  plugins: [],
}
export default config
