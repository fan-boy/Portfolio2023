import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
      '2/5':'40%',
    },
    
    extend: {
      maxWidth:{
        '8xl':'90rem',
      },
      fontFamily: {
        serif: ['var(--font-esperanto)'],
        sans: ['var(--font-quicksand)']
      },
      height: {
        '0.25': '0.07rem',
      },
      colors:{
        backgroundDark: '#1B1B1B',
        backgroundLight: '#FAFAFA',
        fontDark:'#F5F5F5',
        fontLight:'#1B1B1B'
      },
      backgroundImage: {
        'chainReactiveCard':"url('/assets/home/ChainReactive/ChainreactiveLLCbackground.png')",
        'crashrCard':"url('/assets/home/crashr/Crashrbackground.png')",
        'hiveCard':"url('/assets/home/hive/hivebackground.png')",
        'everestosCard':"url('/assets/home/everestos/everestosbackground.png')",
        'uParkCard':"url('/assets/home/universitypark/uParkbackground.png')",
        "cadenceCard":"url('/assets/home/Cadence/background.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
export default config
