//Converting Arrays to Strings
let letters = ["a", "b", "c", "d", "e", "f", "g"];
console.log(letters);
let strLetters = letters.toString();
console.log(strLetters);
console.log(typeof letters);
console.log(typeof strLetters);

let strLettersHyphen = letters.join(" || ");
console.log(strLettersHyphen);

//Removing Elements
let removed = letters.pop();
console.log("Removed Element: "+removed);
console.log(letters);

letters.shift();
console.log(letters);

delete letters[2];
console.log(letters);

letters[2] = "d";
console.log(letters);

//Adding Elements
let newLength = letters.push("g");
console.log("New Length: "+newLength);

console.log(letters);

letters.unshift("a");
console.log(letters);

//Array Operations
let moreLetters = ["h", "i", "j", "k"];
let concatinatedLetters = letters.concat(moreLetters);
console.log(concatinatedLetters);

let slicedArray = concatinatedLetters.slice(2, 6);
console.log(slicedArray);

let unsortedArray = ["s", "b", "c", "g"];
console.log(unsortedArray);
unsortedArray.sort();
console.log(unsortedArray);

let numbersArray = [3, 5, 1, 4, 2];
console.log(numbersArray);
numbersArray.sort((a, b) => b - a);
console.log(numbersArray);

console.log(concatinatedLetters);
concatinatedLetters.reverse();
console.log(concatinatedLetters);

let numbers = [3, 5, 1, 4, 2];
console.log(numbers);
numbers.reverse();
console.log(numbers);