class Student {

    #name;
    #marks;

    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
    }

    getName(){
        return this.#name;
    }

    getMarks(){
        return this.#marks;
    }

    setName(name){
        this.#name = name;
    }

    setName(marks){
        this.#marks = marks;
    }

    

}

let student1 = new Student("John", 80);
console.log(student1.getName());
console.log(student1.getMarks());
student1.setName("Tom");
console.log(student1.getName());


