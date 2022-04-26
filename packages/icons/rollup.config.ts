import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';

export default defineConfig({
  input: './index.ts',
  output: [
    { dir: 'dist', format: 'commonjs', sourcemap: true, preserveModules: true },
  ],
  plugins: [
    url(),
    svgr({ icon: true }),
    typescript({
      declaration: true,
      declarationDir: 'dist',
      rootDir: '.',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
  ],
});
