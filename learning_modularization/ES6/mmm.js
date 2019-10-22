// 因为在script标签中写上了type=‘module’ 表示已经使用模块化开发，这时候想要使用
// 另一个模块的变量 需要在另一ige模块中进行导出，并且要在引用的模块中进行导入
import {flag, sum} from './aaa.js'

if (flag) {
    console.log('小名是天才');
}

console.log(sum(10, 30));

import {num1, height, test} from "./aaa.js";

console.log(num1);
console.log(height);
console.log(test(2, 3));

// 导入类
import {Person2} from "./aaa.js";
const p = new Person2();
p.run();

import per from './aaa.js'
const p1 = new per('zs',18);
p1.eat();

// 如果想要导入另一个模块导出的全部数据，可以使用通配符 * 并且为其定义一个名称 来进行导入
import * as params from './aaa.js'
