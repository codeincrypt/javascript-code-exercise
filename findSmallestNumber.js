/**
 * Finds the smallest number in an array.
 *
 * @param {Array} arr - The array of numbers.
 * @return {number} The smallest number in the array.
 */

var array = [5,6,7,14,2,8]

const findSmallestNumber1 = (arr) => {
	return Math.min(...arr);
}
console.log(findSmallestNumber1(array)) // 👉️ 14


const findSmallestNumber2 = (array) => {
    if (array.length === 0) return 0;
    let smallestValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestValue) {
            smallestValue = array[i];
        }
    }
    return smallestValue;
}
console.log(findSmallestNumber2(array)) // 👉️ 14


const findSmallestNumber3 = (arr) => {
	let sortedArray = arr.sort((a, b) => (a - b));
	return sortedArray[0]
}
console.log(findSmallestNumber3(array)) // 👉️ 14


const findSmallestNumber4 = (arr) => {
	return arr.sort((a, b) => (a - b))[0]
}
console.log(findSmallestNumber4(array)) // 👉️ 14