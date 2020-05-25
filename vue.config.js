module.exports = {
    assetsDir: 'public/guild',
    publicPath:'/app',
    productionSourceMap: false,
    devServer: {
        proxy : {
            '/api':{
                target:'https://piao.qunar.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}