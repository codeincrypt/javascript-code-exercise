const countVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const charArray = word.toLowerCase().split('');
  return charArray.filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Hello World"))


const countVowels2 = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const wordLower = word.toLowerCase();
  let vowelCount = 0;
  for (let i = 0; i < wordLower.length; i++) {
    if (vowels.includes(wordLower[i])) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels2("Hello World"))