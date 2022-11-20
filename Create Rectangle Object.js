// Complete the function in the editor. It has two parameters: a and b .
//  It must return an object modeling a rectangle that has the following properties:
// length: This value is equal to a.
// width: This value is equal to b.
// perimeter: This value is equal to 2.(a+b)
// area: This value is equal to a.b
// -------------------------input: ------------------
// 4
// 5
// ------------------------Output-------------------
// 4
// 5
// 18
// 20

//  solution 1
function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
}

// Solution 2
function Rectangle(a, b) {
  const rec = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };
  return rec;
}

// Solution 3

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}
