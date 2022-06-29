import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import mv from 'rollup-plugin-mv';
import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: './index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'commonjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true, ref: true, memo: true }),
    externals(),
    nodeResolve(),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'dist/esm',
      rootDir: '.',
    }),
    postcss({
      extract: 'index.css',
      modules: true,
      use: ['sass'],
      minimize: true,
    }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
      ],
    }),
    mv(
      [
        {
          src: 'dist/esm/index.css',
          dest: 'dist/assets/styles/index.css',
        },
      ],
      { once: true, overwrite: true }
    ),
    del({
      hook: 'closeBundle',
      targets: ['dist/cjs/index.css'],
    }),
  ],
});
