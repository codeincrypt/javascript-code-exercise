const reverseString = (str) => {
  if (str === '') {
    return '';
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

// reverse String using Recursion
const reversed = reverseString('Hello');
console.log(reversed); // Output: "olleH"

// reverse String using ES6
const reverse = (str) => {
  return str.split("").reverse().join("");
}

console.log(reverse("Hellos"));