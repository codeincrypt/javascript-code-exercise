/**
 * Finds the largest prime factor of a given number.
 * @param {number} num - The number to find the largest prime factor of.
 * @return {number} The largest prime factor of the given number.
 */

const largestPrimeFactor = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            num /= i;
            i--;
        }
    }
    return num;
}
console.log(largestPrimeFactor(24)) // 👉️ 3
console.log(largestPrimeFactor(4))  // 👉️ 2
/*
Defines a function called largestPrimeFactor that takes a number as input. It uses a loop to find the largest prime factor of the input number and returns it.
*/


const largestPrimeFactor2 = (num) => {
    let factor = 2;
    while (factor <= Math.sqrt(num)) {
        if (num % factor === 0) {
            num /= factor;
        } else {
            factor++;
        }
    }
    return num;
}
console.log(largestPrimeFactor2(24)) // 👉️ 3
console.log(largestPrimeFactor2(4))  // 👉️ 2
/*
Calculates the largest prime factor of a given number. It iterates through numbers starting from 2 and checks if the number is divisible evenly. If it is, it divides the number by the factor. If it's not, it increments the factor and continues. The loop stops when the factor is greater than the square root of the number. Finally, it returns the largest prime factor.
*/