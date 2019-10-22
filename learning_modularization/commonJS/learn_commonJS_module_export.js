// 模块化有两个核心：1 导入； 2 导出
let flag = true;
let test = function (a, b) {
    return a + b
};
let demo = function (a, b) {
    return a * b
};


// commonJS的导出的书写语法
module.exports = {
    // 这是ES6的增强写法
    flag,
    test,
    demo
};

