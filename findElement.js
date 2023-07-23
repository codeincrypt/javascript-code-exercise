
let arr = [1,2,3,5,6,7,8,9,10]

const findElement = (arr, element) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			return true
		}
	}
	return false;
}
console.log(findElement(arr, 3)) // 👉️ true

const findElementIndex = (arr, element) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === element) {
			return true;
		}
	}
	return false;
}
console.log(findElementIndex(arr, 15)) // 👉️ false