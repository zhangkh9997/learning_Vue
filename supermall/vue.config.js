// 给路径起别名
module.exports = {
    configureWebpack: {
        // resolve 就是解决路径相关的问题
        resolve: {
            // 为路径起别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}