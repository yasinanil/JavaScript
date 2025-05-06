//Inheritance

class GrandFather {

    number = 12;
    run() {
        console.log("Run!");
    }

}

class Father extends GrandFather {

}

class Son extends Father {

}

let father = new Father();
father.run();
console.log(father.number);

let son = new Son();
son.run();

//The super Keyword
class A {

    constructor(x){
        this.x = x*x;
    }

    print(){
        console.log(this.x);
    }

}


class B extends A{

    constructor(num){
        super(num);
    }

}

let b = new B(5);
b.print();

//Method Overriding
class Animal{

    sounds(){
        console.log("Animals Sound");
    }
}

class Dog extends Animal{

    sounds(){
        console.log("Wov wov!!");
    }

}

class Cat extends Animal{
    sounds(){
        console.log("Meoow!");
    }
}

let dog = new Dog();
dog.sounds();

let cat = new Cat();
cat.sounds();

let animal = new Animal();
animal.sounds();

