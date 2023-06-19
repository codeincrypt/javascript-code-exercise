const findOddNumbers = (numbers) => {
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0){
      output.push(numbers[i]);
    }
  }

  return output;
}

// ENTER YOUR INPUT HERE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FOR FINDING ODD NUMBER WE ARE USING VANILLA JS
let oddNumbers = findOddNumbers(numbers);
console.log(oddNumbers); // 👉️ [1, 3, 5, 7, 9]
const findOddNumbersES6 = numbers => numbers.filter(number => number % 2 !== 0);

// FOR FINDING ODD NUMBER WE ARE USING ES6
const oddNumbers2 = findOddNumbersES6(numbers);
console.log(oddNumbers2); // 👉️ [1, 3, 5, 7, 9]
