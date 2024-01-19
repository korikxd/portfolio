/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      firstAccent: '#F9977B',
      dark: {
        background: '#1F2032',
        text: '#FFE5C1'
      },
      light: {
        background: '#FFE5C1',
        text: '#1F2032'
      },
      black: '#000',
      white: '#FFF',
      gray: '#6b7280',
      red: '#ef4444',
      blue: '#1158d4',
      green: '#08d126',
      orange: '#db8009',
      lightBlue: '#1196d4',
      purple: '#5908d1'
    },
    fontFamily: {
      RobotoSlab: ['Roboto Slab', 'sans-serif'],
      Pacifico: ['Pacifico', 'sans-serif']
    },
    extend: {
      animation: {
        ['infinite-slider']: 'infiniteSlider 20s linear infinite',
        typing: 'typing 2s steps(20), blink 1.5s infinite',
        blinking: 'blinker 1.5s linear infinite'
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 5))' }
        },
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
        blink: {
          '50%': {
            borderColor: 'transparent'
          }
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    })
  ]
}
