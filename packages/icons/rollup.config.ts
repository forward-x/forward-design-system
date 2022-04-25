import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: './index.ts',
  output: [
    { dir: 'dist', format: 'esm', sourcemap: true, preserveModules: true },
  ],
  plugins: [
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
