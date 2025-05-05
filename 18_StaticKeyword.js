class MyClass {

    static staticNum = 5;
    instanceNum = 15;

    static show(){
        console.log("Static Method: "+this.staticNum);
        console.log("Static Method: "+new MyClass().instanceNum);//Not usefull
    }

    demo(){
        console.log("Non-Static Method: "+this.staticNum);
    }

    
}

console.log(MyClass.staticNum);
let obj = new MyClass();
obj.instanceNum = 1;

let obj2 = new MyClass();

console.log(obj.instanceNum);
console.log(obj2.instanceNum);

//console.log(obj2.staticNum);

MyClass.show();




