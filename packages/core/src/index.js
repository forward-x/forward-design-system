const colors = require("./colors/index")
const base = require("../dist/base")
const components = require("../dist/components")
const themes = require("./colors/themes")
const colorFunctions = require("./colors/functions")
/**
 * @type {import("tailwindcss/types/config").PluginCreator}
 */
const mainFunction = ({ addBase, addComponents, config }) => {
  const daisyuiIncludedItems = []

  // inject @base style
  if (Boolean(config("uikit.base")) !== false) {
    addBase(base)
    daisyuiIncludedItems.push("base")
  }

  console.log("base")

  // inject components
  // because rollupjs doesn't supprt dynamic require
  const file = components
  daisyuiIncludedItems.push("components")

  console.log("inject components")

  addComponents(file)

  colorFunctions.injectThemes(addBase, config, themes)
  console.log("inject themes")
}

module.exports = require("tailwindcss/plugin")(mainFunction, {
  theme: { extend: { colors } },
})
