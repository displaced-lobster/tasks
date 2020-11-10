const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'app': path.resolve(__dirname),
      'src': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'layouts': path.resolve(__dirname, 'src/layouts'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'boot': path.resolve(__dirname, 'src/boot'),
      'vue$': path.resolve(__dirname, 'node_modules/vut/dist/vue.esm.js'),
    },
    extensions: ['', '.js', '.vue']
  }
}
