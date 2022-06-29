import { themes } from '@storybook/theming'
import '../dist/assets/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'dark',
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'light' },
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true
  }
}
