module.exports = {
    //部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8080, //端口
        proxy: {
            '/nerves': {
                target: "https://lubanseven.gitee.io",
                changeOrigin: true
            }
        }
    }
}