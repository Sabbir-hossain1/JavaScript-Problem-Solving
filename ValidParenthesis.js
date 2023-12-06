`
Problem : 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
`

const isValid = (strs) => {
  const stack = [];
  for (const c of strs) {
    if (c === "(") {
      stack.push(")");
    } else if (c === "{") {
      stack.push("}");
    } else if (c === "[") {
      stack.push("]");
    } else if (!stack.length || stack.pop() !== c) {
      return false;
    }
  }
  return !stack.length;
};
