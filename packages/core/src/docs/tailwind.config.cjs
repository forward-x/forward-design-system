const uikit = require("../index")

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "../dist/full.js"],
  theme: {
    extend: {},
  },
  plugins: [uikit],
  uikit: {
    base: true,
    darkTheme: "dark",
    themes: ["light", "dark"],
  },
}
