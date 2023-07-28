
/*
This code snippet defines a function called removeElem that takes an id parameter. It uses the filter function in ES6 to remove an item from an array based on its id property. The function returns a new array that doesn't contain the item with the specified id.
*/
let array = [ 
  {name:'John', id:3}, 
  {name:'Akash', id:1},  
  {name:'Amit', id:2}
]
// using filter es6 function to filter the array
const removeElement1 = (id) => {
  return array.filter((item) => item.id !== id);
}

console.log(removeElement1(2)); // 👉️ [ { name: 'John', id: 3 }, { name: 'Akash', id: 1 } ]

/**
 * Removes the specified element from the array.
 *
 * @param {any} e - The element to be removed.
 * @return {Array} - A new array with the element removed.
 */

let array2 = [0,1,2,2,3,0,4,2];
const removeElement2 = (e) => {
  return array2.filter((item) => item !== e);
}

console.log(removeElement2(2));  // 👉️ [ 0, 1, 3, 0, 4 ]