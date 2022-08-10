const postcss = require('rollup-plugin-postcss')
const svgr = require('@svgr/rollup')
const url = require('@rollup/plugin-url')
const static_files = require('rollup-plugin-static-files')
const { exec } = require("child_process")

module.exports = {
  rollup (config, options) {
    if (options.writeMeta) {
      exec("yarn build-assets", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      })
    }
    config.plugins = [
      ...config.plugins,
      postcss({
        // extract: 'index.css',
        minimize: true,
        modules: true,
        use: {
          sass: {
            data: '@import "src/assets/styles/index.scss";'
          },
          less: null,
          stylus: null
        }
      }),
      url(),
      svgr({
        exportType: 'named', svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false
            }
          ]
        }
      }),
      static_files({
        include: ['./src/assets']
      })
    ]
    return config
  }
}
