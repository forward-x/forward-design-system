const { exec } = require('child_process');

const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const static_files = require('rollup-plugin-static-files');

module.exports = {
  rollup(config, options) {
    if (options.writeMeta) {
      exec('yarn build-assets', (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
    config.plugins = [
      ...config.plugins,
      postcss({
        // extract: 'index.css',
        minimize: true,
        modules: true,
        use: {
          sass: {
            data: '@import "src/assets/styles/variables.scss";',
          },
          less: null,
          stylus: null,
        },
      }),
      url(),
      svgr({
        exportType: 'named',
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
          ],
        },
      }),
      static_files({
        include: ['./src/assets'],
      }),
    ];
    return config;
  },
};
