let arr = [1,2,8,3,4,7,12,10,5]

// FINDING LARGEST NUMBER FROM AN ARRAY
const largestNumber = (arr) => {
	arr.sort((a, b) => b - a);
	return arr[0]
}
console.log(largestNumber(arr)) // 👉️ 12


// FINDING SECOND LARGEST NUMBER FROM AN ARRAY
const secondLargestNumber = (arr) => {
	arr.sort((a, b) => b - a);
	return arr.length >= 2 ? arr[1] : -1;
}
console.log(secondLargestNumber(arr)) // 👉️ 10


// REMOVING DUPLICATE ELEMENTS & THEN FINDING LARGEST NUMBER 
const largestNumber2 = (arr) => {
	let uniqueArr = Array.from(new Set(arr));
	uniqueArr.sort((a, b) => b - a);
	return arr[0]
}
console.log(largestNumber(arr)) // 👉️ 12