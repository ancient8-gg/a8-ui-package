import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '**/*/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D8FF76',
          500: '#D8FF76',
          900: '#1E2711',
          950: '#161B14',
        },
        warning: '#FF7300',
        danger: '#D66252',
        neutral: {
          25: '#E7E8E7',
          100: '#AAACAF',
          200: '#A0A29F',
          400: '#96989A',
          500: '#21231F',
          900: '#0D0F0D',
        },
        green: {
          500: '#4BB74B',
        },
        red: {
          500: '#D66252',
        },
      },
      screens: {
        ...defaultTheme.screens,
        mobile: { max: '991.99px' },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('child', '&>*')
      addVariant('child-hover', '& > *:hover')
    }),
  ],
  corePlugins: { preflight: false },
}
export default config
