// const CompressionPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']


module.exports = {
  // runtimeCompiler: true,
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // productionSourceMap: process.env.NODE_ENV !== 'production',
  // // 调试的时候显示sourceMap文件，以方便调试
  // configureWebpack: {
  //   devtool: 'source-map',
  //   plugins: [new CompressionPlugin({
  //     filename: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
  //     algorithm: 'gzip',
  //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })]
  // },
  // 跨域支持
  devServer: {
    host: 'localhost',
    port: '8200',
    open: 'true',
    disableHostCheck: true,
    // 跨域设置
    proxy: {
      '/distribution': {
        target: process.env.VUE_APP_SERVER, // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
           '/distribution': '/'
        }

      }
    }
  }
}
