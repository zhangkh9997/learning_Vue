// 这个文件是存放基础的配置信息

const path = require('path');
// 导入webpack，可以配置一些webpack自带的plugin
const webpack = require('webpack');
//
const htmlWebpackPlugin = require('html-webpack-plugin');
//
// const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        // 由于路径可能发生变化，所以我们需要动态获取路径
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // 这个是配置添加文件时的路径的，到当前学习状态下，已经不再需要他了
        // publicPath: 'dist/',
    },
    module: {
        rules: [
            // 注意1：css-loader 只负责将css文件进行加载，不负责解析，也不负责将
            // .css文件中的样式加载到html中生效
            // style-loader 负责将样式添加到DOM中使其生效
            // 注意2：webpack 在使用多个loader的时候是从右向左读取的，注意书写顺序
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            // {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
            // 注意：在加载图片的时候，需要使用url-loader，但是他依赖 file-loader，需要一起本地安装
            // limit 表示图片大小小于limit的值时，将会使用base64对图片进行编码
            // 如果图片大小大于limit的值时，需要在webpack.config.js 的output中添加一项
            // publicPath:'dist/'，他的作用是一切涉及到url的都会在url前面拼接上dist/
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 13000,
                            // [] 在这里中括号表示变量 . 表示拼接 hash:8 表示取哈西值的8位
                            name: 'img/[name].[hash:8].[ext]',
                        }

                    },
                ]
            },
            // 这个是将ES6的语法转换为ES5的各种浏览器都能够识别的语法
            {
                test: /\.js$/,
                // exclude 排除的意思
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']  // @babel/preset-env
                    }
                }
            },

            // vue-loader 在14.0.0以上还需要依赖一个插件(plugin),因此现在需要安装一个低一点的版本
            {test: /\.vue$/, use:{loader: 'vue-loader'}}

        ]
    },
    // 通过resolve来解决引用vue时的runtime-only的问题
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('最终版权归BenAPT所有！！'),
        // 这个是帮助我们在dist文件夹下自动生成一个html模板，并且可以根据template
        // 指定根据那个模板生成相应的模板
        new htmlWebpackPlugin({
            template:'index.html'
        }),
        // 该插件🥌是帮助我们将js文件进行丑化(压缩),开发阶段不建议使用
        // new uglifyJSWebpackPlugin(),
    ],
    // 搭建本地服务器，是基于node的,还需要在package.json文件中配置scripts脚本
    // "dev":"webpack-dev-server" 这样就可以使用npm run dev命令来运行服务器
    // devServer:{
    //     // 配置需要监听的文件
    //     contentBase: './dist',
    //     // inline表示是否要实时监听变化
    //     inline:true
    // },
};