module.exports = {
    assetsDir: 'public/guild',
    publicPath:'./',
    productionSourceMap: false,
    devServer: {
        proxy : {
            '/api':{
                target:'https://piao.qunar.com',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        }
    }
}