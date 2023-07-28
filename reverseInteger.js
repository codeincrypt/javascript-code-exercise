/**
 * Reverses the digits of an integer number.
 *
 * @param {number} e - The integer number to be reversed.
 * @return {number} - The reversed integer number.
 */

const reverseInteger = (e) => {
  return parseFloat(e.toString().split('').reverse().join('')) * Math.sign(e)
};

let val = 1534236469
console.log(reverseInteger(val))   // 👉️ 9646324351
/*
This code defines a function called reverseInteger that takes a number e as input. It converts the number to a string, splits the string into an array of characters, reverses the array, and then joins the characters back into a string. Finally, it converts the string back to a number, multiplies it by the sign of the original number, and returns the result. Essentially, the code reverses the digits of the input number while preserving the sign.
*/

/**
 * @param {number} x
 * @return {number}
 */
const reverseInteger2 = (x) => {
  var reverseN = 0;
    var sign = x < 0;
    x = Math.abs(x);
    while (x) {
        reverseN = reverseN*10 + (x % 10);
        x = Math.floor(x/10);
    }
    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};

let val2 = 321
console.log(reverseInteger2(val2))  // 👉️ 123
console.log(reverseInteger2(val))   // 👉️ 0
/*
This code snippet defines a function called reverse that takes a number x signed 32-bit integer as input and returns the reverse of that number. It uses a while loop to iteratively extract the last digit of the number and add it to the reverseN variable. The function also handles negative numbers and checks for overflow.
*/