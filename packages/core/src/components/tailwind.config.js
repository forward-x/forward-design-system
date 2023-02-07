const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../lib/responsiveRegex")
const base = require("../../dist/base")
const colors = require("../colors")

module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors,
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase(base)
    }),
  ],
}
