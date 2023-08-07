/**
 * Removes all occurrences of a specified element from an array.
 *
 * @param {Array} nums - The array from which to remove elements.
 * @param {any} val - The element to remove from the array.
 * @return {Array} A new array with all occurrences of the specified element removed.
 */

let array = [0,1,2,2,3,0,4,2]
const removeElement = (nums, val) => {
    return nums.filter((item) => item !== val);
};
console.log(removeElement(array, 2))