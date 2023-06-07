const primeNumber = (number) => {
	let isPrime = true;
	// check if number is equal to 1
    if (number == 1) {
        return console.log("1 is neither prime nor composite");
    }
	// check if number is greater than 1
    if (number > 1){
      	// looping through 2 to number-1
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			return console.log(`${number} is a prime number`);
		} else {
			return console.log(`${number} is a not prime number`);
		}
    }
}

// Put your Number here
primeNumber(13)