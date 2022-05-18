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
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    {
      // https://github.com/egoist/rollup-plugin-postcss/issues/381#issuecomment-880771065
      name: 'Custom rollup plugin by dandrewgarvin',
      generateBundle: (options, bundle) => {
        Object.entries(bundle).forEach((entry) => {
          if (!entry[0].match(/.*(.scss.js)$/)) {
            return;
          }

          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          bundle[entry[0]].code = entry[1].code.replace(
            '../../node_modules/style-inject/dist/style-inject.es.js',
            'style-inject'
          );
        });
      },
    },
    copy({
      targets: [{ src: 'package.json', dest: 'dist' }],
    }),
  ],
});
