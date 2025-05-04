//Creating Strings
let message = "Hello World!";

let messageObject = new String("Hello world!");

console.log(typeof message);
console.log(typeof messageObject);

//Print the reverse of a string
let nameStr = "Mary Star";
let reversedName = "";

for (let i = nameStr.length - 1; i >= 0; i--) {
    reversedName += nameStr.charAt(i)
}

console.log(nameStr);
console.log(reversedName.toUpperCase());

//Numbers
let num1 = 5;
let num2 = 5.1;
let num3 = "123A" - 5;

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));
console.log(Number.isInteger(num3));
console.log(Number.isNaN(num3));
console.log(num1.toString() + 15);