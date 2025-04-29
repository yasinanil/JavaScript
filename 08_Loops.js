//While Loop
//Print numbers 1 to 5 on console:
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);//This is hard codding

//Dynamic Code:
console.log("While Loop:");
let number = 1;
while (number <= 10) {
    console.log(number);
    number++;
}

//Do-While Loop
console.log("Do-While Loop:");
number = 1;
do {
    console.log(number++);
} while (number < 11);

//For Loop
console.log("For Loop:");
//Example: Print even numbers between 2 and 10.
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

//Example: Print the sum of even numbers between 1 and 20.
let sum = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log("Sum: " + sum);

//Example: Stop loop when number is 4
console.log("Break:");
number = 1;
while (number <= 100) {
    if (number == 4) {
        break;
    }
    console.log(number++);
}

//Example: Print even numbers between 2 and 100 except multiples of 3.
console.log("Continue:");
number = 2;
while (number <= 100) {
    if (number % 3 == 0) {
        number++;
        continue;
    }
    if (number % 2 == 0) {
        console.log(number);
    }
    number++;

}

//Infinite Loop:
console.log("while(true):");

number = 0;
while (true) {
    number++;
    if (number > 100) {
        break;
    }
    if (number % 5 == 0) {
        continue;
    }
    console.log(number);
}