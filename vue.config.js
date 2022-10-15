module.exports = {
    publicPath: './',
    productionSourceMap: false,
    transpileDependencies: true,
    lintOnSave: false,
    //代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: ' http://gmall-h5-api.atguigu.cn',
            }
        }
    },

}