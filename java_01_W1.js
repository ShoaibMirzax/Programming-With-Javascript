// Exercise: Advanced use of operators    Week_1   Programmimng with javascript

// Task 1: Using the logical && operator
var score = 8
console.log("Mids-level skills: " , score > 0 && score < 10)

// Task 2: Using the logical || operator
let timeRemaining = 0;
let energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0)

// Task 3: Using the modulus operator, %, to test if a given number is odd
let num1 = 2;
let num2 = 5;
let test1 = num1 % 2
let test2 = num2 % 2
let result1 = test1 == 0
let result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

// Task 4: Add numbers using the + operator
console.log(5+10)

// Task 5: Concatenate numbers and strings using the + operator
let now = "Now in ";
let three = 3
let d = "D!"
console.log(now + three + d)

// Task 6: Use the += operator to accumulate values in a variable
let counter = 0;
counter +=5;
counter+=3;
console.log(counter)
