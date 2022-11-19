const prompt = require("prompt-sync")();

// Solution 1
function getSecondLargest(nums) {
  let uniqueElements = [...new Set(nums)];
  uniqueElements.sort((a, b) => a - b);
  return uniqueElements[uniqueElements.length - 2];
}

// Solution 2
function getSecondLargest(nums){

}



let nums = prompt("Enter the values: ");
nums = nums.split(" ").map(Number);

console.log(getSecondLargest(nums));
