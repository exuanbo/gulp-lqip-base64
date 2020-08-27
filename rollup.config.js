const commonjs = require('@rollup/plugin-commonjs')
const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  plugins: [commonjs()],
  external: ['path', ...Object.keys(pkg.dependencies)],
  output: [
    {
      file: 'dist/gulp-lqip-base64.js',
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: 'dist/gulp-lqip-base64.es.js',
      format: 'es'
    }
  ]
}
