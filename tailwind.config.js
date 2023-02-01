/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js}", "./index.html",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')
  ],
  darkMode: ['class'],   // The dark mode is depending on the presence of 'dark' class. Manageg via JS
  theme: {
    fontFamily: {
      mono: ['inconsolata']
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        lightPrimary: 'var(--color-light-primary)',
        darkPrimary: 'var(--color-dark-primary)',
        complementer: 'var(--color-complementer)',
        lightComplementer: 'var(--color-light-complementer)',
        darkComplementer: 'var(--color-dark-complementer)',
        bgColor: colors.gray[200],
        lightBgColor: colors.gray[100],
        darkBgColor: colors.gray[600],
        textColor: colors.gray[600],
        darkTextColor: colors.gray[800],
        lightTextColor: colors.gray[500],
        invTextColor: colors.gray[100],
        sLightTextColor: colors.gray[400]
      },
      container: {
        center: true,
      }
    },
  }
}
