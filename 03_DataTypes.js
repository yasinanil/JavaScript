//Primitive Data Types:
let age = 25;
let price = 19.99;
let fullName = "John Doe";
let isActive = true;
let currentUser = null;
let data;

//Non-Primitive Data Types:
let person = {firstName: "Mary", age:30 };//Object
let fruits = ["apple","banana","cherry"];//Array
function greet(){
    return "Hello "+fullName;
}

console.log(greet());

let currentDate = new Date(); //Date
console.log(currentDate);

//Checking data types
console.log(typeof person);
console.log(typeof currentDate);
console.log(typeof greet);
console.log(typeof age);
console.log(typeof data);

