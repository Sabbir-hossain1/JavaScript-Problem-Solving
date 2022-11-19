//1.Try to reverse string  using the split, reverse, and join methods.
//2.If an exception is thrown, catch it and print the
// contents of the exception's message on a new line.
//3.Print s on a new line. If no exception was thrown,
// then this should be the reversed string; if an exception was thrown,
// this should be the original string.
function reverseString(s) {
  try {
    const reversed = s.split("").reverse().join("");
    console.log(reversed);
  } catch (err) {
    console.log(err.message);
    console.log(s);
  }
}
