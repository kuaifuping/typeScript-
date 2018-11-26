
//定义一个变量后跟 : + 数据类型 声明变量的类型，只能赋值声明的类型数据

//布尔值
//注意，使用构造函数 Boolean 创造的对象不是布尔值new Boolean(1)
let isDone: boolean = false;


//数值
//TypeScript里的所有数字都是浮点数。支持十进制十六进制，还支持ECMAScript 2015中引入的二进制和八进制
let decLiteral: number = 6;


//字符串
//支持模板字符串，${expr} 用来在模板字符串中嵌入表达式。
let myName: string = "bob";


//空值
//用 void 表示没有任何返回值的函数：
function alertName(): void {
    alert('My name is Tom');
}
//声明一个void类型的变量没有什么大用，因为只能为它赋予undefined和null：
let unusable: void = undefined;


//undefined null
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let u: undefined = undefined;
let n: null = null;
//与 void 的区别是，undefined 和 null 是所有类型的子类型(非strict)
let num: number = undefined;


//数组
// 第一种定义数组类型方式，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list1: number[] = [1, 2, 3];
let list2: any[] = [1, 2, '3']; 
//第二种方式是使用数组泛型，Array<元素类型>：
let list3: Array<number> = [1, 2, 3];


//元组 Tuple
//元组类型属于数组，表示一个已知元素数量和类型的数组，各元素的类型不必相同。
//可以定义一对值分别为 string和number类型的元组。
let x: [string, number] = ['hello', 10];
//当访问一个越界的元素，会使用联合类型替代：
x[3] = 'world'; // 不存在的元素可以赋值已声明的(string | number)类型,若x[3]=true报错


//枚举 Enum
//枚举类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
//通过数据1、2等不能明确表示什么意思，可以用英文单词表示
//枚举元素默认下标从0开始，也可手动赋值
enum Color {Red, Green=2, Blue}
let c: Color = Color.Green;//变量声明为已定义的Color枚举类型，可以明确获取Green对应的数值2
let colorName: string = Color[2]; //通过下标获取对应的枚举值Green


//any
//不进行类型检查，即可以赋予任何类型的数据
let notSure: any = 4;
notSure = "maybe a string instead";
//Object允许赋任意值 - 但是却不能够在它上面调用任意的方法
let prettySure: Object = 4
prettySure = "qwe"

//object小写
//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
let oo: object = {}
let aa: object = []

// 定义变量未声明数据类型，默认为any
let asd
asd =123
asd ="asd"


//类型推断，定义变量未声明数据类型但有赋值，会根据值类型给变量一个数据类型
//此时推断hhh数据类型为number,hhh=true会报错
let hhh = 123;


//联合类型
//联合类型（Union Types）表示取值可以为多种类型中的一种。
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//不确定一个联合类型的变量到底是哪个类型的时候，只能访问此联合类型的所有类型里共有的属性或方法(number没有length会报错)
//若return something.length会报错，因为length不是strinh和number的共有方法
function getLength(something: string | number): string  {
    return something.toString(); 
}


