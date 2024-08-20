const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  content: [],
  theme: {
    extend: {},
    colors: {
      "red": "#eb2f06",
      "white": colors.white,
      "gray": colors.gray,
    }
  },
  plugins: [],
}

