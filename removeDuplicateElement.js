// Remove duplicate elements from array

const array = [8, 1, 2, 14, 7, 8, 3, 5, 2];

// METHOD : 1
let array1 = Array.from(new Set(array));
console.log('METHOD : 1: ', array1)

// METHOD : 2
let array2 = [...new Set(array)];
console.log('METHOD : 2: ', array2)

// METHOD : 3
let array3 = array.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);
console.log('METHOD : 3: ', array2)

// METHOD : 4
let array4 = array.filter((item, index) => array.indexOf(item) === index)
console.log('METHOD : 4: ', array4)