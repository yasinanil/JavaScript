
//Creating Arrays:
let cars = ["Saab", "Volvo", "BMW", "Mercedes", "Cherry", "Renault"];
console.log(cars);

let carsAlt = new Array("Saab", "Volvo", "BMW");
console.log(carsAlt);

//Accessing Array Elements
let thirdCar = cars[2];
let firstCar = cars[0];
console.log("First Car: " + firstCar);
console.log(thirdCar);

//Modifying Array Elements
cars[0] = "Opel";
cars[4] = "Ford";
console.log(cars);

//Finding Array Length
let length = cars.length;
console.log(length);

//Last Element
let lastElement = cars[length - 1];
console.log(lastElement);

//Iterating Through Arrays
console.log("Iterating Through Arrays:");
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log("for of loop:");
for(let eachElement of cars ){
    console.log(eachElement);
}

//Storing Objects in Arrays
let person1 = {
    name : "John",
    age : 20
};

let person2 = {
    name : "Mary",
    age : 40
};

let person3 = {
    name : "Tom",
    age : 35
};

let people = [person1, person2, person3];
console.log(people);

//Here’s how to calculate the sum of agesin the people array:
let sum = 0;
for(let eachPerson of people){
    let eachAge = eachPerson.age;
    sum += eachAge;
}
console.log(sum);

//Checking if a Variable is an Array
console.log(typeof cars);

let isArray = Array.isArray(cars);
console.log(isArray);


