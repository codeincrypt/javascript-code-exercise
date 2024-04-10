/**
 * Reverses a given string.
 *
 * @param {string} str - The input string to be reversed
 * @return {undefined} No return value
 */
// reverse String using Recursion
const reverseString = (str) => {
  if (str === '') {
    return '';
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('Hello'));  // 👉️ "olleH"


// reverse String using ES6
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString2("Hello"));  // 👉️ solleH


const reverseString3 = (str) => {
  let reversed = ""
  for (const element of str) {
    reversed += element
  }
}
console.log(reverseString2("Hello"));  // 👉️ olleH


const reverseString4 = (input) => {
  let reversedData = ""
  input = input.toString()
  for (let i=input.length - 1; i>=0; i--){
      reversedData = reversedData + input[i]
  }
  return reversedData
}
console.log(reverseString4("Hello"));  // 👉️ solleH