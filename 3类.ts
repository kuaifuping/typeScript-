//类
class Animal {
    mYname: string;
    constructor(name: string) {
        this.mYname = name;
    }
    sayHi() {
        return `My name is ${this.mYname}`;
    }
}
let ani = new Animal('Jack');


//类的继承
//使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
class Cat extends Animal {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.mYname);
    }
    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}
let cat = new Cat('Tom'); // Tom
console.log(cat.sayHi()); // Meow, My name is Tom


// 类的修饰符
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class Animal1 {
    private name: string;
    protected age: number;
    public constructor(name:string,age: number) {
        this.name = name;
        this.age = age
    }
}
class Cat1 extends Animal1 {
    constructor(name,age) {
        super(name,age);
        console.log(this.age)//在子类可以访问age，不能访问name
    }
}
let cat1 = new Cat1("john",123) //子类实例不能访问父类的私有和保护类型，即name和age都不能通过cat1访问



//存取器
//使用 getter 和 setter 可以改变属性的赋值和读取行为,来截取对对象成员的访问
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return 'Jack';
    }
    set name(value) {
        console.log('setter: ' + value);
    }
}
let a1 = new Animal2('Kitty'); // setter: Kitty
a1.name = 'Tom'; // setter: Tom
console.log(a1.name); // Jack



//静态方法
//使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

class Animal3 {
    static isAnimal(a) {
        return a instanceof Animal3;
    }
}
let aaa = new Animal3();
console.log(Animal3.isAnimal(aaa)); // true


//抽象类
//abstract 用于定义抽象类和其中的抽象方法
//抽象类是不允许被实例化的
//抽象类中的抽象方法不包含具体实现并且必须被子类实现
abstract class Animala {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cata extends Animala {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cata = new Cata('Tom');


//类的类型
//给类加上 TypeScript 的类型很简单，与接口类似 (能用接口的地方大多数也能用类约束)
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter;  //意思是 Greeter类的实例的类型是 Greeter
greeter = new Greeter("world");
console.log(greeter.greet());