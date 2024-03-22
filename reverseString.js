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
console.log(reverseString('Hello')); // 👉️ "olleH"

// reverse String using ES6
const reverseString2 = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString2("Hellos")); // 👉️ solleH

const reverseString3 = (str) => {
  let reversed = ""
  for (const element of str) {
    reversed += element
  }
}
console.log(reverseString2("Hello"));