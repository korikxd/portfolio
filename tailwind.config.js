/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primaryOrange: '#fe5000',

      black: '#000',
      gray: '#6b7280',
      red: '#ef4444',
      blue: '#1158d4',
      green: '#08d126',
      orange: '#db8009',
      lightBlue: '#1196d4',
      purple: '#5908d1',

      //Light Theme Colors
      lightBackground: '#f6f6f6',
      lightFontColor: '#5a4669',

      //Dark Theme Colors
      darkBackground: '#08070b',
      darkFontColor: '#8f9ba8'
    },
    fontFamily: {
      cabin: ['Cabin']
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
          },
          '100%': {
            borderColor: 'white'
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
