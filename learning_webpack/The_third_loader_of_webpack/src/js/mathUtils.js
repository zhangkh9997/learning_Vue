function add(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}

// 使用 commonJS 模块化规范导出
module.exports = {
    add,
    mul
};