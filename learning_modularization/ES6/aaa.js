let name = '小名';
let age = 18;
let flag = true;

function sum(a, b) {
    return a + b
}

if (flag) {
    console.log(sum(20, 30));
}

// 向外暴露成员 使用 export； 任何模块都可以通过导入来调用成员
// 导出方式1：在变量定义好之后再导出
export {
    flag,
    sum
}

// 导出方式2：在变量定义的时候就直接导出
export let num1 = 1000;
export let height = 1.88;

export function test(a, b) {
    return a * b
}

// 也可以导出类
export function Person() {
    
}

export class Person2 {
    run(){
        console.log('在奔跑');
    }
}

// export default 的使用：某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而是
// 让导入者可以自己来命名，这个时候就可以使用 export default
// 并且，在一个模块中，有且只能有一个 export default

class Person3 {
    constructor(name,age){
        this.name = name;
        this.age = age
    };
    eat(){
        console.log('eating');
    };
    code(){
        console.log('coding');
    }
}

export default Person3




