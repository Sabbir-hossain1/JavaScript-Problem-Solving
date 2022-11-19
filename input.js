const prompt = require("prompt-sync")();

var firstName = prompt("Enter your name: ");
var lastName = prompt("Enter Your last name: ");
let array1 = prompt("Enter the array value: ");
array1 = array1.split(" ").map(Number);
const sum = array1.reduce((partialSum, a) => partialSum + a, 0);
console.log("Your full name is ", firstName, lastName, array1, sum);
