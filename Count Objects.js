// Complete the function in the editor. It has one parameter: an array,a , of objects.
//  Each object in the array has two integer properties denoted by x and y .
//  The function must return a count of all such objects o in array a that satisfy o.x==o.y.
//----------------input--------------------
// 5
// 1 1
// 2 3
// 3 3
// 3 4
// 4 5

// -----------------output---------
// 2 (1,1 and 3,3)

// Solution 1
function getCount(objects) {
  let count = 0;
  for (let p in objects) {
    // if (objects[p].x === objects[p].y) {
    //   count += 1;
    // }
  }
  return count;
}

// Solution 2

function getCount1(objects) {
  let count = 0;
  objects.forEach((element) => {
    if (element.x === element.y) {
      count += 1;
    }
  });
  return count;
}

// Solution 3

function getCount2(objects) {
  return objects.filter(function (val) {
    return val.x === val.y;
  }).length;
}

console.log(
  getCount([
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
  ])
);
