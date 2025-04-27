//Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(5 ** 3);
console.log(2 ** 5);

b++;// b=b+1;
console.log(b);

let m = ++b;//Pre-Increment
console.log(m);

//Assignment Operators
console.log("Assignment Operators:");
let c = 7;
a += c;
console.log(a);

//Comparison (Relational) Operators
console.log("Comparison (Relational) Operators:");
console.log(c);
console.log(b);
console.log(b == c);

console.log(a > b);
console.log(a != b);

//Logical Operators
console.log("Logical Operators:");
let t = true;
let f = false;

console.log(t && f);
console.log(t && t);
console.log(t || f || f || f);
console.log(t && f && t && t);

//Ternary Operator
console.log("Ternary Operator:");
let x = 10, y = 20;
console.log(x > y ? x : y);

let result = x == y;

let equality = result ? "They are equal" : "They are not equal";
console.log(equality);
