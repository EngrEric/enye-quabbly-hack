const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#2D9CDB'
    }),
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        manrope: 'Manrope'
      },
      fontSize: {},
      colors: {
        primary: '#2D9CDB'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1408px'
      },
      borderColor: {
        primary: '#2D9CDB'
      },
      backgroundSize: {
        ...defaultTheme.backgroundSize,
        'size-55': '55%'
      },
      height: {}
    }
  },
  plugins: []
}
