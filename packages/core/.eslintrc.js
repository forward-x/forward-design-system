module.exports = {
  extends: ['../../.eslintrc.json', 'plugin:storybook/recommended'],
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname + '/tsconfig.json',
      },
    },
  },
};
