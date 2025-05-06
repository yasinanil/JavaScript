class Shape{
    draw(){
        return "I am a generic shape"
    }
}

class Square extends Shape{
    draw(){
        return "I am a square"
    }
}

class Circle extends Shape{
    draw(){
        return "I am a circle"
    }
}

let shape = new Shape();
console.log(shape.draw());

shape = new Square();
console.log(shape.draw());

shape = new Circle();
console.log(shape.draw());