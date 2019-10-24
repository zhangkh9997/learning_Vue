// 这个文件夹中存放的就是开发时所需要的配置

const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = webpackMerge(
    baseConfig, {
        // 搭建本地服务器，是基于node的,还需要在package.json文件中配置scripts脚本
        // "dev":"webpack-dev-server" 这样就可以使用npm run dev命令来运行服务器
        devServer: {
            // 配置需要监听的文件
            contentBase: './dist',
            // inline表示是否要实时监听变化
            inline: true
        },
    }
)
;