// 这是整个程序的入口文件

// 使用commonJS的模块化规范导入
const {add, mul} = require('./js/mathUtils');

// 这是使用ES6的模块化规范导入
import {name, age, height} from "./js/info.js";

console.log(add(10, 20));
console.log(mul(10, 20));

console.log(name, age, height);