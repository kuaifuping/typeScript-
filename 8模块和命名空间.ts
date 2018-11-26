//导出声明
//任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。
export interface StringValidator { 
    isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;
//a.ts,导入 import {StringValidator,numberRegexp } from './a'
// import * as xxx from './a' //导入所有的a.ts中的导出


//导出语句,export { xxx }可以用as重命名
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator as mainValidator };
//a.ts,导入 import { mainValidator } from './a'

//默认导出,标记为默认导出的类和函数的名字是可以省略的
export default class {}
//a.ts,导入 import abc from './a' 定义一个名字引入默认导出的模块



//为了支持CommonJS和AMD的exports, TypeScript提供了export =语法
let num = 123;
export = num;  //导出

import zip = require("./a"); // 导入
console.log(zip) // 123



//命名空间
//不用担心与其它对象产生命名冲突。 包裹到一个命名空间内，而不是把它们放在全局命名空间下
//想让这些接口和类在命名空间之外也是可访问的，所以需要使用 export。
namespace Validation { //a.ts
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

//多文件中的命名空间
//当应用变得越来越大时，需要将一个命名空间里的代码分离到不同的文件中以便于维护。
//把Validation命名空间分割成多个文件。 尽管是不同的文件，它们仍是同一个命名空间，并且在使用的时候就如同它们在一个文件中定义的一样。 
//因为不同文件之间存在依赖关系，所以要加入了引用标签来告诉编译器文件之间的关联。
//a.ts
namespace Validation { 
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

//b.ts
/// <reference path="a.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator1 implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}

//当涉及到多文件时，我们必须确保所有编译后的代码都被加载了。 有两种方式。
//第一种方式，把所有的输入文件编译为一个输出文件，需要使用--outFile标记：
//tsc --outFile sample.js xxx.ts(xxx.ts是引用使用命名空间的ts)
//第二种方式，可以编译每一个文件（默认方式），每个源文件都会对应生成一个JavaScript文件。 然后，在页面上通过 <script>标签把所有生成的JavaScript文件按正确的顺序引进来，


//命名空间的别名
//在引用命名空间时，可以通过import关键字起一个别名
import asd = Validation;     // 别名

//不能使用/// <reference>引用模块文件，应该使用import
//把命名空间转为模块
export namespace Shapes { //错误写法，不应该对模块使用命名空间，
    export class Triangle { /* ... */ }
    export class Square { /* ... */ }
}
//模块文件本身已经是一个逻辑分组，没有必要为导出的对象增加额外的模块层
export class Triangle { /* ... */ }
export class Square { /* ... */ }