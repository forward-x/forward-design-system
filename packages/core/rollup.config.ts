import path from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
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
  external: [
    'react',
    'react/jsx-runtime',
    '@forward-protocol/ui-icons',
    'react-switch',
    'clsx',
    'tslib',
    'react-merge-refs',
  ],
  plugins: [
    peerDepsExternal({
      packageJsonPath: path.resolve(__dirname, './package.json'),
    }),
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true }),
    nodeResolve(),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }),
    commonjs(),
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
        { src: 'README.md', dest: 'dist' },
      ],
    }),
  ],
});
