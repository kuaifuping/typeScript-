//类型断言（Type Assertion）可以用来手动指定一个值的类型

//语法1<类型>值
//语法2值 as 类型 ,在 tsx 语法（React 的 jsx 语法的 ts 版）中必须这一种

//联合类型中只能访问两种类型的公共方法，断言类型为string，不管变量是哪种类型当string处理
//断言不是类型转换，不能断言成可能的类型之外的类型
function toBoolean(something: string | number): number {
    return (<string>something).length;
}
console.log(toBoolean(123))

//类型保护与区分类型

class Type1Class  {
    func1(): void {
        console.log('func1 run');
    }

    func2(): void {
        console.log('func2 run');
    }
}

class Type2Class {
    func3(): void {
        console.log('func1 run');
    }
    func2(): void {
        console.log('func2 run');
    }
}

function getSomeType(type: string): Type1Class | Type2Class {
    if (type === '1') {
        return new Type1Class();
    }
    if (type === '2') {
        return new Type2Class();
    }
    throw new Error(`Excepted Type1Class or Type2Class, got ${type}`);
}
//因为返回时联合类型，所以只能使用公共方法，即func2,使用type.func1或type.func3报错
// let type = getSomeType('1');
// if (type.func1) {
//     type.func1(); // 报错
// } else if (type.func3) {
//     type.func3(); // 报错
// }

//只能通过不断的类型断言判断执行
// let type = getSomeType('1');
// if ((<Type1Class>type).func1) {
//     (<Type1Class>type).func1();
// } else if ((<Type2Class>type).func3) {
//     (<Type2Class>type).func3();
// }

//用户自定义的类型保护,就是检查判断出使用的值是联合类型的具体哪一种类型
//假若一旦检查过类型，就能在之后的每个分支里清楚地知道let type = getSomeType('1')的类型
//类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 要定义一个类型保护，只要定义一个函数，它的返回值是一个 类型谓词：
//"type is Type1Class"就是类型谓词。 谓词为 parameterName is Type这种形式， parameterName必须是来自于当前函数签名里的一个参数名
//每当使用一些变量调用isType1时，如果原始类型兼容，TypeScript会将该变量缩小到该特定类型。
function isType1(type: Type1Class | Type2Class): type is Type1Class {
    return (<Type1Class>type).func1 !== undefined;
}
let type = getSomeType('1');
if(isType1(type)) {
    type.func1()
} else {
    type.func3();
}

//typeof类型保护

//类型断言的方式防止报错
// function aaaaa(something: string | number): number {
//     return (<string>something).length;
// }

//类型保护的方式防止报错
function isString(s:any) : s is string {
    return typeof s === "string";
}
function aaaaa(something: string | number): number {
    if(isString(something)){
        return something.length
    }
    throw new Error("")
}
//因为TypeScript可以将typeof识别为一个类型保护。 也就是说可以直接在代码里检查类型了。不必将 typeof x === "number"抽象成一个函数，
function q(something:string | number): number {
    if(typeof something == "string"){
        return (something).length;
    }
    throw new Error("")
}
console.log(q(0))


//instanceof类型保护,同typeof一样可以直接判断a instanceof A,通过构造函数来细化类型,判断返回实例的构造函数是联合对象的哪个