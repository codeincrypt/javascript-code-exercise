/**
 * Finds the largest number in an array.
 *
 * @param {Array} arr - An array of numbers.
 * @return {number} The largest number in the array.
 */
var array = [5,6,7,14,2,8,9,0]

/*
This code snippet defines a function called indexOfMaximumValue1 that takes an array as input. It uses the spread operator (...) to pass the elements of the array as separate arguments to the Math.max() function, which returns the maximum value. The function then returns that maximum value.
*/
const findLargestNumber1 = (arr) => {
	return Math.max(...arr);
}
console.log(findLargestNumber1(array)) // 👉️ 14

/*
This code snippet defines a function called indexOfMaximumValue2 that takes an array as a parameter. It finds the maximum value in the array and returns it. If the array is empty, it returns 0.
*/
const findLargestNumber2 = (array) => {
    if (array.length === 0) {
        return 0;
    }
    else{
		var maximumValue = 0;	
		for (var i = 1; i < array.length; i++) {
			if (array[i] > maximumValue) {
				maximumValue = array[i];
			}
		}
		return maximumValue;
    }
}
console.log(findLargestNumber2(array)) // 👉️ 14


const findLargestNumber3 = (arr) => {
	let sortedArray = arr.sort((a, b) => (a > b ? -1 : 1));
	return sortedArray[0]
}
console.log(findLargestNumber3(array)) // 👉️ 14


const findLargestNumber4 = (arr) => {
	return arr.sort((a, b) => (a > b ? -1 : 1))[0]
}
console.log(findLargestNumber4(array)) // 👉️ 14


const findLargestNumber5 = (arr) => {
	let sortedArray = arr.sort((a, b) => (a - b)).reverse();
	return sortedArray[0]
}
console.log(findLargestNumber5(array)) // 👉️ 14