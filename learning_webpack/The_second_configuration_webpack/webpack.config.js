const path = require('path');

// 将 webpack 的出口和入口 映射到 webpack的配置文件中 简化命令
// 完全命令为 webpack ./src/main.js ./dist/bundle.js
// 简化为 webpack，但是 还有更进一步的简化操作
// 那就是使用命令 npm init 来生成一个 package.json 的文件 并在该文件的
// scripts 中定义 "build": "webpack"， 在接下来的使用中就可以使用
// npm run build 命令来进行打包创建文件，好处是会优先使用本地的webpack进行打包
module.exports = {
  entry: './src/main.js',
  output:{
      // 由于路径可能发生变化，所以我们需要动态获取路径
      path:path.resolve(__dirname,'dist'),
      filename:'bundle.js',
  },
};