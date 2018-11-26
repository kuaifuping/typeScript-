//泛型
//泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
//通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
//在类、方法等中多处使用同样的数据类型校验，不固定写死一种数据类型，支持不定的数据类型


//函数泛型
// T表示泛型，具体什么类型是调用这个方法的时候决定的 
// 要求：传入的参数和返回的参数一直
//用泛型T表示传入和输出的类型，支持多种类型
function getData<T>(value:T):T{
    return value;
}
getData<number>(123);
getData<string>('1214231'); //string类型可以省略，会根据参数推断出类型


//多个类型参数
//定义泛型的时候，可以一次定义多个类型参数：
//要求： 交换输入的两个元素
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]


//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  //泛型 T 不一定包含属性 length，所以编译的时候报错了
    return arg;
}
//可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface Lengthwise {
    length: number;
}
//使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
function loggingIdentity1<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}


//泛型类
//与泛型接口类似，泛型也可以用于类的类型定义中：
class MinClas<T>{
    public list:T[]=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{        
        var minNum=this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum>this.list[i]){
                minNum=this.list[i];
            }
        }
        return minNum;
    }
}
var m1=new MinClas<number>();   /*实例化类 并且制定了类的T代表的类型是number*/
m1.add(3);
m1.add(2);
alert(m1.min())


//泛型接口
interface ConfigFn1{
    <T>(value:T):T; //定义接口函数的泛型
}
var getData1:ConfigFn1=function<T>(value:T):T{
    return value;
}
getData1<string>('张三');
//也可以把泛型定义在接口上
interface ConfigFn2<T>{
    (value:T):T;
}
function getData2<T>(value:T):T{
    return value;
}

var myGetData:ConfigFn2<string>=getData2;     
myGetData('20');  


//泛型参数的默认类型
//可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。
function createArray<T = string>(length: number, value: T): Array<T> {//指定默认string类型
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}


//在泛型里使用类类型
//在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，

function create<T>(c: {new(): T; }): T {
    return new c();
}