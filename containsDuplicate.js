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

// USING VANILA JS TO CHECK THE ELEMENT CONTAINS DUPLICATE OR NOT   
let check1 = checkContainDuplicates(numbers)
console.log(check1) // 👉️ false

let numbers2 = [1,2,3,1]
let check2 = checkContainDuplicates(numbers2)
console.log(check2) // 👉️ true