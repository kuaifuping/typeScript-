
//函数类型声明
//约束输入参数和输出类型,输入多余的（或者少于要求的）参数，是不被允许的
function sum(x: number, y: number): number {
    return x + y;
}


//函数表达式声明定义
//左边的变量和右边的函数都要声明约束
//在函数和返回值类型之前使用(=>)符号,如果函数没有返回任何值，必须指定返回值类型为 void不能留空
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
//用接口定义函数的形状
//方法参数名称不需要与接口成员的参数名称保持一致
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}


//可选参数
//用 ? 表示可选的参数,可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

let tom = buildName('Tom');


//参数默认值
//允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数,但不受「可选参数必须接在必需参数后面」的限制
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName1('Tom', 'Cat');
let tom1 = buildName1('Tom');


//剩余参数
//ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
//注意，rest 参数只能是最后一个参数
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}
//事实上，items 是一个数组。可以用数组的类型来定义它：
function push1(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [];
push1(a, 1, 2, 3);



//重载
//重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//实现一个函数 reverse，输入数字123的时候，输出反转的数字321，输入'hello'输出'olleh'。
//重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。
//注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}





