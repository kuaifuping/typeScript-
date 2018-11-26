//对类的一部分行为进行抽象,声明类中应该具有哪些属性和方法
interface Value {
    label: string;
}
function printLabel(labelledObj: Value) {//参数类中必须有label属性且为string
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


//可选属性
//希望不要完全匹配一个形状，那么可以用可选属性：

interface Person {
    name: string;
    age?: number; //age为可选
}
let tom122: Person = {
    name: 'Tom'
};


//任意属性
//希望一个接口允许有任意的属性，可以使用如下方式：
//使用 [propName: string] 定义了任意属性取 string 类型的值。
//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
interface Person {
    name: string;
    age?: number;
    [propName: string]: any; //若此时any改为number会报错,any包括子属性类型number和string
}
let toma: Person = {
    name: 'Tom',
    gender: 'male',
    age :123
};


//只读属性
//希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

interface Person1 {
    readonly id: number;
    name: string;
}

let tom234: Person1 = {
    id: 89757,
    name: 'Tom',
}; //tom234.id = 9527报错


