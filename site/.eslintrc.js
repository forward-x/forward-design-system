module.exports = {
  extends: '../.eslintrc.json',
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        project: __dirname + '/tsconfig.json',
      },
    },
  },
};
