import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { defineConfig } from 'rollup';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: '.',
    },
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
