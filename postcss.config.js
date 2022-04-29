const purgecss = require("@fullhuman/postcss-purgecss")
const cssnano = require("cssnano")

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    cssnano({
      "preset": "advanced",
    }),
    purgecss({
      content: ['./public/*.html'],
      css: ['./public/*.css']
    })
  ]
}