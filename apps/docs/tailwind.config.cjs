const uikit = require('../../packages/core/src/index');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [uikit],
  uikit: {
    base: true,
    darkTheme: 'dark',
    themes: ['light', 'dark'],
  },
};
