/*
This code snippet is a function called isPrime that checks if a given number is prime or not. It iterates from 2 to the square root of the input number and checks if the number is divisible by any of the iterated values. If it is divisible by any value, it returns false, indicating that the number is not prime. Otherwise, it returns true, indicating that the number is prime.
*/
const isPrime = (num) => {
  // Check if the input is less than 2
  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }
  return true;
}

const primeFactors1 = (num) => {
  const result = [1];
  for (let i = 2; i <= num; i++){
    while (isPrime(i) && num % i === 0) {
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}

console.log(primeFactors1(6)); // 👉️  [ 1, 2, 3 ]
console.log(primeFactors1(15)); // 👉️  [ 1, 3 ]

function primeFactors2(n) {
  const factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  
  if (n > 1) factors.push(n);
  
  return factors;
}

console.log(primeFactors2(6)); // 👉️  [ 1, 2, 3 ]
console.log(primeFactors2(15)); // 👉️  [ 1, 3 ]