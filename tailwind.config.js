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
      "red": "#e74c3c",
      "white": colors.white,
      "gray": colors.gray,
    }
  },
  plugins: [],
}

