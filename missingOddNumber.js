const findMissingOddNumber = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b)
  let end = sortedArray.at(-1)
  let missingNumber = [];

  for (let i = 0; i <= end; i++) {
    if (i % 2 !== 0 && !arr.includes(i)) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

const arr = [1, 3, 5, 7, 9, 11, 15, 19, 21];
const missingOddNumber = findMissingOddNumber(arr);
console.log("Missing odd number:", missingOddNumber); // 👉️ [ 13, 17 ]
