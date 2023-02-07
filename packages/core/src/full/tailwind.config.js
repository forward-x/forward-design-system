const plugin = require("tailwindcss/plugin")
const responsiveRegex = require("../lib/responsiveRegex")
const colors = require("../colors")
const base = require("../../dist/base")
const components = require("../../dist/components")

module.exports = {
  content: [{ raw: "" }],
  safelist: responsiveRegex,
  theme: {
    colors,
  },
  corePlugins: ["animation", "backgroundColor", "backgroundImage", "backgroundOpacity", "backdropOpacity", "borderColor", "borderOpacity", "divideColor", "divideOpacity", "gradientColorStops", "opacity", "placeholderColor", "preflight", "ringColor", "ringOffsetColor", "ringOffsetWidth", "ringOpacity", "ringWidth", "textColor", "textOpacity", "transitionProperty"],
  plugins: [
    plugin(({ addBase, addComponents }) => {
      addBase(base)
      addComponents(components)
    }),
  ],
}
