//接口描述函数类型。
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}


//接口描述数组：
//NumberArray 表示：只要 index 的类型是 number，那么值的类型必须是 number。
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];


//类型转换
//在TypeScript里，接口可以对符合任一成员类型的对象进行转换，转换之后的对象自动继承了接口的其他成员
//声明了拥有name属性的json对象，通过<>转换成了Animal类型的对象。转换后的对象则拥有了另外的age属性和eat方法
//被转换的对象为空或实现了部分接口  (能用接口的地方大多数也能用类约束,这里也可以用类进行转换，不过方法要写具体实现)
interface Animal {
    name: string;
    age: number;
    eat(): void;
}

let thing = { name: '桌子' };
let otherThing = <Animal>thing;             // 类型转换
otherThing.age = 5;
otherThing.eat = function () {
    console.log(`${this.name} 不知道吃什么。`)
};


//类实现接口
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}


//接口继承接口
interface Alarm {
    alert();
}
interface LightableAlarm extends Alarm {
    lightOn();
    lightOff();
}

//接口继承类
//当一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）引用
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


//混合类型
//一个对象可以同时做为函数和对象使用，并带有额外的属性
//一个函数还可以有自己的属性和方法：

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let ca = getCounter();
ca(10);
ca.reset();
ca.interval = 5.0;