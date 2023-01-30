/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const brick = '#D06224'
const brown = '#AE431E'
const olive = '#8A8635'
const beige = '#E9C891'

const bobagreen = '#9FC088'
const darkbeige  = '#E8C07D'

module.exports = {
  content: [
    "./src/**/*.{html,js}", "./index.html",
    "./node_modules/flowbite/**/*.js"
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
        primary: bobagreen,
        lightprimary: beige,
        darkprimary: olive,
        complementer: darkbeige,
        lightcomplementer: olive,
        bgcolor: colors.gray[200],
        darkBgColor1: colors.gray[600],
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
