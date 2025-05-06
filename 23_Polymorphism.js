class Shape{
    draw(){
        return "I am a generic shape"
    }
}

class Square  extends Shape{
    draw(){
        return "I am a Square"
    }
}

class Circle  extends Shape{
    draw(){
        return "I am a Circle"
    }
}

let shape = new Shape();
console.log(shape.draw());

let square = new Square();
console.log(square.draw());

let circle = new Circle();
console.log(circle.draw());



