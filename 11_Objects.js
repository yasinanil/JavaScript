let person = {

    fistName: "John",
    lastName: "Doe",
    age: 35,
    weight: 70

}

//Accessing Object Properties
let fName = person.fistName;
let age = person.age;
let weight = person["weight"];

console.log(weight);

//Adding new properties:
person.height = 180;
console.log(person.height);

//Updating existing properties:
person.fistName = "Tom";
console.log(person["fistName"]);

//Deleting properties:
delete person.lastName;
//or
delete person["lastName"];
console.log(person.lastName);

//Iterating Through Object Properties
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    genre: "Self-help"
};

for (let key in book) {
    if (key === "year") {
        console.log(key + ": " + book[key]);
    }
}

//Object Methods

let employee = {

    name: "Tim",
    age: 25,
    salary: 5000,
    bonus: function(){
        return this.salary/10
    }
}

let bonus = employee.bonus();
console.log(bonus);