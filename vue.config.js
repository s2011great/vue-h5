const path = require('path')
// 将路径片段dir与__dirname连接成完整路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 关闭生产环境SourceMap
  productionSourceMap: false,
  // 生产环境禁用，开发环境启用eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 开发服务器
  devServer: {
    open: 'chrome',      // 开发服务启动后自动打开chrome浏览器
    host: '127.0.0.1',   // 指定使用一个host
    port: '8090',        // 端口地址
    https: false         // 使用https服务
  },
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  css: {
    // 配置css loader
    loaderOptions: {
      sass: {
        data: `
        @import "@/style/mixin.scss";
        @import "@/style/_var.scss";
        `
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 100
          })
        ]
      }
    }
  }
}