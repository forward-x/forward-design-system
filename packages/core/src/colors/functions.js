const colorObject = require(".")
const colorNames = require("./colorNames")

module.exports = {
  makeThemeValues(input) {
    const resultObj = {}
    if (typeof input === "object" && input !== null) {
      Object.entries(input).forEach(([rule, value]) => {
        if (Object.prototype.hasOwnProperty.call(colorNames, rule)) {
          resultObj[colorNames[rule]] = value
        } else {
          resultObj[rule] = value
        }
        Object.entries(colorObject).forEach(([subRule, subValue]) => {
          if (Object.prototype.hasOwnProperty.call(colorNames, subRule)) {
            resultObj[colorNames[subRule]] = subValue
          } else {
            resultObj[subRule] = subValue
          }
        })
      })
    }
    return resultObj
  },
  injectThemes(addBase, config, themes) {
    const includedThemesObj = {}

    if (Boolean(config("daisyui.themes")) === false) {
      Object.entries(themes).forEach(([theme]) => {
        includedThemesObj[theme] = this.makeThemeValues(themes[theme])
      })
    }

    let themeOrder = []
    if (Array.isArray(config("daisyui.themes"))) {
      config("daisyui.themes").forEach((theme) => {
        if (typeof theme === "object" && theme !== null) {
          Object.entries(theme).forEach(([customThemeName]) => {
            themeOrder.push(customThemeName)
          })
        } else if (Object.prototype.hasOwnProperty.call(includedThemesObj, `[data-theme=${theme}]`)) {
          themeOrder.push(theme)
        }
      })
    } else if (config("daisyui.themes") !== false) {
      themeOrder = ["light", "dark"]
    } else if (config("daisyui.themes") === false) {
      themeOrder.push("light")
    }

    // inject themes in order
    themeOrder.forEach((themeName, index) => {
      if (index === 0) {
        // first theme as root
        addBase({
          ":root": includedThemesObj[`[data-theme=${themeName}]`],
        })
      } else if (index === 1) {
        // auto dark
        if (config("daisyui.darkTheme")) {
          if (themeOrder[0] !== config("daisyui.darkTheme") && themeOrder.includes(config("daisyui.darkTheme"))) {
            addBase({
              "@media (prefers-color-scheme: dark)": {
                ":root": includedThemesObj[`[data-theme=${config("daisyui.darkTheme")}]`],
              },
            })
          }
        } else if (themeOrder[0] !== "dark" && themeOrder.includes("dark")) {
          addBase({
            "@media (prefers-color-scheme: dark)": {
              ":root": includedThemesObj["[data-theme=dark]"],
            },
          })
        }
        // theme 0 with name
        addBase({
          [`[data-theme=${themeOrder[0]}]`]: includedThemesObj[`[data-theme=${themeOrder[0]}]`],
        })
        // theme 1 with name
        addBase({
          [`[data-theme=${themeOrder[1]}]`]: includedThemesObj[`[data-theme=${themeOrder[1]}]`],
        })
      } else {
        addBase({
          [`[data-theme=${themeName}]`]: includedThemesObj[`[data-theme=${themeName}]`],
        })
      }
    })

    return {
      includedThemesObj,
      themeOrder,
    }
  },
}
