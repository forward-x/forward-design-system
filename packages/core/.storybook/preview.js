import { themes } from '@storybook/theming';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import '../dist/assets/styles/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
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
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => {
    const isDarkMode = useDarkMode();

    useEffect(() => {
      const root = document.getElementsByTagName('body');
      root.item(0).dataset.theme = isDarkMode ? 'dark' : 'light';
    }, [isDarkMode]);

    return <Story />;
  },
];
