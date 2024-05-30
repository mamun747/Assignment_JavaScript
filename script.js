// 1
let carName = "Volvo";
console.log(carName);

// 2
let firstName = "John";
let lastName = "Doe";
let age = 35;

// to varify it in console
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 35

// 3
let x = 10;
let y = 5;
let z = (x *= y); // x is now 50
console.log(z);

// 4
let length = 16; // data type: number
let lastName2 = "Johnson"; // data type: string

const x2 = {
  firstName: "John",
  lastName: "Doe",
}; // data type: object

// 5
function myFunction() {
  alert("Hello World!");
}
myFunction(); // Calling the function

// 6
const person = {
  name: "John",
  age: 50,
};
alert(`${person.name} is ${person.age}`);

// 7
function myFunction() {
  alert("Hello vaiya") + alert(new Date().getDate());
}

// 8
const cars = ["Volvo", "Jeep", "Mercedes"]; // 1 no answer
alert("Number of items in the array: " + cars.length);

const Brand = ["Volvo", "Jeep", "Mercedes"]; // 2 no answer
Brand[0] = "Ford";
console.log(Brand);

// 9
// creating a random number
let randomNumber = Math.random(); // 1 no answer
console.log(randomNumber);

// finding the largest number between 10 and 20
let largestNumber = Math.max(10, 20); // 2 no answer
console.log(largestNumber);

// the square root of 9
let squareRoot = Math.sqrt(9); // 3 no answer
console.log(squareRoot);

// 10
let a = 10;
let b = 5;
alert(a > b); // 1 no answer

// conditional (ternary) operator
let age2 = 17;
alert(age2 < 18 ? "Too young" : "Old enough"); // 2 no answer
