const arr = [
  {
    id: "1",
    name: "BMW",
  },
  {
    id: "2",
    name: "Audi",
  },
  {
    id: "3",
    name: "Volvo",
  },
];
/**
 * Finds the index of the first occurrence of an object with name "BMW" in the given array.
 * @param {Array} arr - The array to search.
 * @returns {number} - The index of the object with name "BMW", or -1 if not found.
 */
const findIndexOf = (arr) => {
  const index = arr.map((i) => i.name).indexOf("BMW");
  return index
}
console.log(findIndexOf(arr)); // 👉️ 0

const findIndexOf2 = (arr) => {
  // Map the array to an array of names
  const names = arr.map((i) => i.name);
  // Find the index of the first occurrence of "BMW"
  const index = names.indexOf("Volvo");
  // Return the index, or -1 if not found
  return index;
}
console.log(findIndexOf2(arr)); // 👉️ 2