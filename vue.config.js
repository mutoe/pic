const { resolve } = require('path')

module.exports = {
  baseUrl: '/',
  lintOnSave: true,
  css: {
    loaderOptions: {
      stylus: {
        // inject the stylus variables into each vue components.
        import: [resolve(__dirname, 'src/assets/stylus/variables.styl')],
      },
    },
  },
  configureWebpack: {
    output: {
      chunkFilename: 'js/[name]-[chunkhash].js',
    },
  },
  devServer: {
    open: false,
    disableHostCheck: true,
    proxy: {
      '/api': { target: 'http://localhost:3001/' },
      '/uploads': { target: 'http://localhost:3001/' },
    },
  },
}
