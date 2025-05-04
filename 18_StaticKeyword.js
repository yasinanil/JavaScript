class MyClass {

    static staticNum = 10;
    instanceNum = 5;

    static show(){
        console.log("Static Method: "+this.staticNum);
        //console.log(this.constructor.instanceNum);
    }

}

console.log(MyClass.staticNum);

let obj1 = new MyClass();
console.log(obj1.instanceNum);

MyClass.staticNum = 2;

MyClass.show();

