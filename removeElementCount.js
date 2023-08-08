/**
 * Removes all occurrences of a specified value from an array and returns the new length of the array.
 * @param {Array} nums - The array from which the elements should be removed.
 * @param {any} val - The value to be removed from the array.
 * @return {number} - The new length of the array after removing all occurrences of the specified value.
 */

let array = [0,1,2,2,3,0,4,2]
const removeElement1 = (nums, val) => {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    return i;
}
console.log(removeElement1(array, 2))   // 👉️ 5
/*
This code snippet defines a function removeElement1 that takes in an array nums and a value val. It iterates over the array and removes all occurrences of val by shifting the elements. It returns the new length of the array after the removal.
*/