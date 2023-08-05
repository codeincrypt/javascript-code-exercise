/**
 * Finds the index of the maximum value in an array.
 * @param {Array<number>} arr - The array to search through.
 * @return {number} The index of the maximum value.
 */
var array = [5,6,7,14,2,8,9,0]

/*
This code snippet defines a function called indexOfMaximumValue1 that takes an array as input. It uses the spread operator (...) to pass the elements of the array as separate arguments to the Math.max() function, which returns the maximum value. The function then returns that maximum value.
*/
const indexOfMaximumValue1 = (arr) => {
	return Math.max(...arr);
}
console.log(indexOfMaximumValue1(array)) // 👉️ 14


/*
This code snippet defines a function called indexOfMaximumValue2 that takes an array as a parameter. It finds the maximum value in the array and returns it. If the array is empty, it returns 0.
*/
const indexOfMaximumValue2 = (array) => {
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
console.log(indexOfMaximumValue2(array)) // 👉️ 14
