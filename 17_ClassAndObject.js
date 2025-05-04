//Create Class

class Student{

    constructor(name, id, grade){
        this.name = name;
        this.id = id;
        this.grade = grade;
    }

    displayStudent(){
        console.log("Name:"+this.name +", ID:"+this.id+", Grade:"+this.grade );
    }



}

let student1 = new Student("John", 100, 5);//constructor
student1.grade = 4;
student1.displayStudent();
let student2 = new Student("Mary", 101, 2);
student2.name = "Lilly";
student2.displayStudent();
