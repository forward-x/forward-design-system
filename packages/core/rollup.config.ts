import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'commonjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    postcss({
      extract: 'assets/styles/index.css',
      modules: true,
      use: {
        sass: {
          data: '@import "src/assets/styles/index.scss";',
        },
        less: null,
        stylus: null,
      },
    }),
    copy({
      targets: [
        {
          src: 'src/assets/styles/_colors.scss',
          dest: 'dist/assets/styles',
        },
        { src: 'src/assets/styles/_fonts.scss', dest: 'dist/assets/styles' },
        { src: 'src/assets/styles/_mixins.scss', dest: 'dist/assets/styles' },
        { src: 'src/assets/fonts/*', dest: 'dist/assets/fonts' },
        { src: 'package.json', dest: 'dist' },
      ],
    }),
  ],
});
