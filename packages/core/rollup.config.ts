import scss from 'rollup-plugin-scss';

const static_files = require('rollup-plugin-static-files');
export default [
  {
    input: './src/assets/styles/index.scss',
    output: [
      {
        dir: './dist/assets',
      },
    ],
    plugins: [
      scss({
        output: './dist/assets/styles/index.css',
        failOnError: true,
      }),
      static_files({
        include: ['./src/assets'],
      }),
    ],
  },
];
