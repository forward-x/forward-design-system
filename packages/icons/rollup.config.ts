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
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'commonjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: '.',
    },
  ],
  external: ['react', 'react/jsx-runtime', 'clsx'],
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
      rootDir: '.',
    }),
    commonjs(),
    postcss({
      extract: 'assets/styles/index.css',
      modules: true,
      use: ['sass'],
    }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
      ],
    }),
  ],
});
