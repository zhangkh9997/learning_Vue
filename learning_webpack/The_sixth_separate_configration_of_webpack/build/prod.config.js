
//  这个文件时生产环境下需要的配置
const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = webpackMerge(
    baseConfig,
    {
        plugins: [
            // 该插件🥌是帮助我们将js文件进行丑化(压缩),开发阶段不建议使用
            new uglifyJSWebpackPlugin(),
        ],
    }
);