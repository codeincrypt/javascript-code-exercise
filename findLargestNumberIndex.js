/**
 * Finds the index of the maximum value in an array.
 * @param {Array<number>} arr - The array to search through.
 * @return {number} The index of the maximum value.
 */
var array = [5,6,7,2,8,9,0]

const indexOfMaximumValue1 = (arr) => {
	return arr.indexOf(Math.max(...arr));
}
console.log(indexOfMaximumValue1(array)) // 👉️ 5
/*
This code snippet defines a function called indexOfMaximumValue that takes an array of numbers as a parameter. It uses the Math.max function to find the maximum value in the array, and then uses the indexOf method to return the index of that maximum value in the array.
*/

const indexOfMaximumValue2 = (array) => {
    if (array.length === 0) {
        return -1;
    }
    else{
		var maximumValue = array[0];
		var maxIndex = 0;
	
		for (var i = 1; i < array.length; i++) {
			if (array[i] > maximumValue) {
				maxIndex = i;
				maximumValue = array[i];
			}
		}
		return maxIndex;
    }
}
console.log(indexOfMaximumValue2(array)) // 👉️ 5
/*
This code snippet defines a function called indexOfMaximumValue2 that takes an array as input. It finds the index of the maximum value in the array by iterating through the elements and comparing them with the current maximum value. If the array is empty, it returns -1. Otherwise, it returns the index of the maximum value.
*/