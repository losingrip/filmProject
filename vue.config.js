module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './',
  lintOnSave: true,
  devServer: {
    host: '0.0.0.0',
    public: '192.168.5.93:8880',
    port: '8880',
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://106.54.56.20:8080',
        changeOrigin: true,    //表示是否跨域，
        pathRewrite: {           //表示需要rewrite重写的
          '^/api': '  ',
        }
      }
    }
  }
}
