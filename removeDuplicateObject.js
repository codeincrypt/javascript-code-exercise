const input = [
  { name: "John", age: 20 },
  { name: "David", age: 20 },
  { name: "John", age: 25 },
  { name: "David", age: 20 }
];
/**
 * Removes duplicate objects from the input array based on the 'name' property.
 *
 * @param {Array} array - The input array of objects
 * @return {Array} The array with duplicate objects removed
 */

/*
This code snippet defines a function that removes duplicate objects from an array based on the 'name' property of each object.
It uses the filter function to create a new array that contains only the unique objects.
*/



const removeDuplicateObject1 = (array) => {
  const output = array.reduce((unique, current) => {
    const duplicate = unique.find(obj => obj.name === current.name);
    if (!duplicate) {
      unique.push(current);
    }
    return unique;
  }, []);
  return output
}
console.log(removeDuplicateObject1(input));  // 👉️ [ { name: 'John', age: 20 }, { name: 'David', age: 20 } ]



const removeDuplicateObject2 = (array) => {
  const output = array.filter((obj, index, self) =>
    index === self.findIndex((t) => (t.name === obj.name))
  );
  return output
}
console.log(removeDuplicateObject2(input));  // 👉️ [ { name: 'John', age: 20 }, { name: 'David', age: 20 } ]



const removeDuplicateObject3 = (array) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;
    for (const element of output) {
      if (input[i].name === element.name) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) output.push(input[i]);
  }
  return output
}
console.log(removeDuplicateObject3(input));  // 👉️ [ { name: 'John', age: 20 }, { name: 'David', age: 20 } ]