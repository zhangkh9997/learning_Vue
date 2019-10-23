const path = require('path');

// 将 webpack 的出口和入口 映射到 webpack的配置文件中 简化命令
// 完全命令为 webpack ./src/main.js ./dist/bundle.js
// 简化为 webpack，但是 还有更进一步的简化操作
// 那就是使用命令 npm init 来生成一个 package.json 的文件 并在该文件的
// scripts 中定义 "build": "webpack"， 在接下来的使用中就可以使用
// npm run build 命令来进行打包创建文件，好处是会优先使用本地的webpack进行打包
module.exports = {
    entry: './src/main.js',
    output: {
        // 由于路径可能发生变化，所以我们需要动态获取路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'dist/',
    },
    module: {
        rules: [
            // 注意1：css-loader 只负责将css文件进行加载，不负责解析，也不负责将
            // .css文件中的样式加载到html中生效
            // style-loader 负责将样式添加到DOM中使其生效
            // 注意2：webpack 在使用多个loader的时候是从右向左读取的，注意书写顺序
            {test: /\.css$/, use: ['style-loader','css-loader']},
            // {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}
            // 注意：在加载图片的时候，需要使用url-loader，但是他依赖 file-loader，需要一起本地安装
            // limit 表示图片大小小于limit的值时，将会使用base64对图片进行编码
            // 如果图片大小大于limit的值时，需要在webpack.config.js 的output中添加一项
            // publicPath:'dist/'，他的作用是一切涉及到url的都会在url前面拼接上dist/
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:13000,
                            // [] 在这里中括号表示变量 . 表示拼接 hash:8 表示取哈西值的8位
                            name:'img/[name].[hash:8].[ext]',
                        }

                    },
                    ]
            },

        ]
    }
};