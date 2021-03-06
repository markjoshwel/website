const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Decima Mono Pro', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}