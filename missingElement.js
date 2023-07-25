let arr = [10,9,2,7,6,4,3,1]

function missingNumber(arr) {
  // // checking the missing element index 
  for (let n = 1; n <= arr.length + 1; n++) {
    if (arr.indexOf(n) === -1) 
      return n;
  }
}
console.log(missingNumber(arr))
