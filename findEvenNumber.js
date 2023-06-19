const findEvenNumbers = (numbers) => {
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      output.push(numbers[i]);
    }
  }

  return output;
}

// ENTER YOUR INPUT HERE
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// USING VANILLA JSS
let evenNumbers = findEvenNumbers(numbers);
console.log(evenNumbers); // 👉️ [2, 4, 6, 8, 10]

// BY USING ES6
const findEvenNumbersES6 = numbers => numbers.filter(number => number % 2 === 0);
const evenNumbers2 = findEvenNumbersES6(numbers);
console.log(evenNumbers2); // 👉️ [2, 4, 6, 8, 10]
