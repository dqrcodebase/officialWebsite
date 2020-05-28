module.exports = {
    assetsDir: '',
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://gallery.echartsjs.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/v1': {
                target: 'https://sgt.package.qunar.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/v1': ''
                }
            }
        }
    }
};
