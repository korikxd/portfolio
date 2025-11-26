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
      red: {
        DEFAULT: '#ef4444',
        600: '#dc2626'
      },
      blue: '#1158d4',
      green: {
        DEFAULT: '#08d126',
        600: '#059669'
      },
      orange: '#db8009',
      lightBlue: '#1196d4',
      purple: '#5908d1'
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'system-ui', 'sans-serif']
    },
    extend: {
      animation: {
        ['infinite-slider']: 'infiniteSlider 30s linear infinite',
        typing: 'typing 2s steps(20), blink 1.5s infinite',
        blinking: 'blinker 1.5s linear infinite',
        gradient: 'gradient 3s ease infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100px * 25))' }
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
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
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
