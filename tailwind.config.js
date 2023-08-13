/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      //Banner Colors
      bannerPrimaryColor: '#eb3a5b',
      bannerGradientColor: '#fe5000',
      primary: '#fe5000'
    },
    fontFamily: {
      titillium: ['Titillium Web']
    },
    extend: {
      keyframes: {
        loop: {
          '0%': { transform: 'translate-x-[0]' },
          '100%': { transform: 'translate-x-[-50%]' }
        }
      },
      animation: {
        loop: 'loop ease-linear repeat-infinite direction-[var(--direction)] duration-[var(--duration)]'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
