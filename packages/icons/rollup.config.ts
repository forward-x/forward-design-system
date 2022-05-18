import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import copy from 'rollup-plugin-copy';
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
  plugins: [
    url({ destDir: 'dist/assets' }),
    svgr({ icon: true }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: '.',
    }),
    commonjs(),
    nodeResolve({ resolveOnly: ['style-inject'] }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    copy({
      targets: [{ src: 'package.json', dest: 'dist' }],
    }),
  ],
});
