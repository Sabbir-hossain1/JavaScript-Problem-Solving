// this function is all about how to use reduce function to an array in different way
// Sum of Values in an object Array [{x:10},{x:20},{x:30}]
const objects = [{ x: 10 }, { x: 20 }, { x: 30 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);
console.log(`This is the sum of objects: ${sum}`);

//Flatten an array of arrays
const arrayOfArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const Flatten = arrayOfArray.reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);
console.log(`The flatten array: ${Flatten}`);
