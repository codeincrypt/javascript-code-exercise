/**
 * Rotates the elements of an array by the specified input amount.
 *
 * @param {Array} array - The original array to be rotated
 * @param {number} input - The amount by which to rotate the array
 * @return {Array} The rotated array
 */

const rotateArray = (array, input) => {
  const rotated = Array(array.length)
  for(let i=0; i<array.length; i++){
    rotated[(i+input) % array.length] = array[i]
  }
  for(let i=0; i<array.length; i++){
    array[i] = rotated[i]
  }
  return rotated
}
console.log(rotateArray([1,2,3,4,5], 2))  //  👉️ [ 4, 5, 1, 2, 3 ]


const rotateArray2 = (arr, n) => {
  const rotated = arr.slice(-n).concat(arr.slice(0, -n));
  arr.length = 0;
  arr.push(...rotated);
  return arr;
}
console.log(rotateArray2([1,2,3,4,5], 1)) //  👉️ [ 5, 1, 2, 3, 4 ]