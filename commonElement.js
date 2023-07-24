// let A = [3,3,3]
// let B = [3,3,3]
// let C = [3,3,3]
let A = [1, 5, 10, 20, 40, 80]
let B = [6, 7, 20, 80, 100]
let C = [3, 4, 15, 20, 30, 70, 80, 120]

// COMMAN ELEMENT OF 2 ARRAY USING PURE/ VANILA JAVASCRIPT
const commonElement = (array1, array2) => {
	let commonArray = [];
	for (let i = 0; i <array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (array1[i] === array2[j]) {
				commonArray.push(array1[i])
			}
		}
	}
	return commonArray;
}
console.log(commonElement(A, B))   // 👉️ [ 20, 80 ]


// COMMAN ELEMENT OF 2 ARRAY USING ES6
const commonElementES6 = (arr1, arr2) => {
	let uniqueArray = []
	arr1.forEach(ele1 => {
		arr2.forEach(ele2 => ele1 === ele2 && uniqueArray.push(ele1));
	});
	return uniqueArray;
}
console.log(commonElementES6(A, B))   // 👉️ [ 20, 80 ]


// COMMAN ELEMENT OF 3 & ABOVE ARRAY USING VANILLA JS
const commonElements_2 = (arr1, arr2, arr3) => {
  const array = [];
  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];
    if (arr2.indexOf(currentElement) !== -1 && arr3.indexOf(currentElement) !== -1) {
      array.push(currentElement);
    }
  }
  return array;
};

console.log(commonElements_2(A, B, C))   // 👉️ [ 20, 80 ]


const commonElementES6_2 = (...arr) => {
	let array = [...arr];
	let newArr = array.reduce((x, y) => x.filter((z) => y.includes(z)));
	return Array.from(new Set(newArr));
}
console.log(commonElementES6_2(A, B, C))    // 👉️ [ 20, 80 ]
