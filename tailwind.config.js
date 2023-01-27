/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const brick = '#D06224'
const brown = '#AE431E'
const olive = '#8A8635'
const beige = '#E9C891'

module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: ['class'],   // The dark mode is depending on the presence of 'dark' class. Manageg via JS
  theme: {
    fontFamily: {
      mono: ['inconsolata']
    },
    extend: {
      colors: {
        primary: brick,
        lightprimary: beige,
        darkprimary: brown,
        complementer: olive,
        lightcomplementer: olive,
        bgcolor: colors.gray[200],
        darkbgcolor: colors.gray[300],
        lightbgcolor: colors.gray[100],
        selectcolor: olive,
        textcolor: colors.gray[600],
        darktextcolor: colors.gray[800],
        lighttextcolor: colors.gray[500],
        invtextcolor: colors.orange[100],
        slighttextcolor: colors.gray[400]
      },
      container: {
        center: true,
      }
    },
  }
}
