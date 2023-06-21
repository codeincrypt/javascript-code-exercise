const checkContainDuplicates = (numbers) => {
  const array = new Set()

  for (let i = 0; i < numbers.length; i++) {
    if(array.has(numbers[i])) {
      return true
    }
    array.add(numbers[i])
  }

  return false
}


// ENTER YOUR INPUT HERE
let numbers = [1,2,3,4]
let numbers2 = [1,2,3,1]

// USING VANILA JS TO CHECK THE ELEMENT CONTAINS DUPLICATE OR NOT   
let check1 = checkContainDuplicates(numbers)
console.log(check1) // 👉️ false

let check2 = checkContainDuplicates(numbers2)
console.log(check2) // 👉️ true


const containsDuplicate = (arr) => {
  const set = new Set(arr);
  return set.size !== arr.length;
};

let check3 = containsDuplicate(numbers)
console.log(check3);  // 👉️ false

let check4 = containsDuplicate(numbers2);
console.log(check4);  // 👉️ true