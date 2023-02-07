const postcssImport = require("postcss-import")
const postcssNested = require("postcss-nested")
const tailwind = require("tailwindcss")
const autoprefixer = require("autoprefixer")

module.exports = {
  plugins: [
    postcssImport,
    postcssNested({
      bubble: ["screen"],
    }),
    tailwind("./src/components/tailwind.config.js"),
    autoprefixer,
  ],
}
