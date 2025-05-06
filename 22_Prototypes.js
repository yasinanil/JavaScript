function Student() {

    this.name = "John";
    this.gender = "Male";

}

let student1 = new Student();
//student1.age = 25;
console.log(student1.name + " - " + student1.gender + " - " + student1.age);

let student2 = new Student();
console.log(student2.name + " - " + student2.gender + " - " + student2.age);

// Adding a property using prototype
Student.prototype.age = 30;
Student.prototype.grade = "B";

console.log(student1.name + " - " + student1.gender + " - " + student1.age + " - " + student1.grade);
console.log(student2.name + " - " + student2.gender + " - " + student2.age + " - " + student2.grade);

//Adding Properties to Classes via Prototype
// Define a class
class Employee {
    constructor(id, eName) {
        this.id = id;
        this.eName = eName;
    }

    add(num1, num2) {
        console.log(num1 + num2);
    }
}

Employee.prototype.salary = 5000;

let employee1 = new Employee("101", "Tom");
console.log(employee1.eName + " - " + employee1.id + " - " + employee1.salary);
let employee2 = new Employee("102", "Mary");
console.log(employee2.eName + " - " + employee2.id + " - " + employee2.salary);
employee1.add(6, 4);

//Adding Methods to Classes via Prototype
Employee.prototype.multiply = function (num1, num2) {
    console.log(num1 * num2);
}

employee1.multiply(5, 6);
employee2.multiply(3, 9);