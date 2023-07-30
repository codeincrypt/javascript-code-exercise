/*
This code calculates the sum of a series of numbers from 1 to N using a mathematical formula.

This code snippet calculates the sum of a series of numbers from 1 to N using a formula. It multiplies N with N+1, and then divides the result by 2 to get the sum
*/

let n = 4
// METHOD : 1
const findSumOfSeries1 = () => {
  let output = 0;
  for(let i=1;i<=n;i++){
    output+=i
  }
  return output;
}
console.log(findSumOfSeries1(n)) // 👉️ 10

// METHOD : 2
let n2 = 5
const findSumOfSeries2 = (N) =>  {
  return (N * (N + 1)) / 2;
}
console.log(findSumOfSeries2(n2));  // 👉️ 15