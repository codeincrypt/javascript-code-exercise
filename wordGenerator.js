/**
 * Generates all unique permutations of the given characters using recursion.
 *
 * @param {array} characters - The array of characters to generate permutations from
 * @return {array} An array of unique permutations of the given characters
 */
const generateUniqueWordsRecursive = (characters) => {
  const result = [];

  const permute = (currentWord, remainingChars) => {
      if (remainingChars.length === 0) {
          result.push(currentWord.join(''));
          return;
      }

      for (let i = 0; i < remainingChars.length; i++) {
          const newWord = [...currentWord];
          newWord.push(remainingChars[i]);
          const newRemainingChars = remainingChars.slice(0, i).concat(remainingChars.slice(i + 1));
          permute(newWord, newRemainingChars);
      }
  }
  permute([], characters);
  return result;
}

const uniqueWordsRecursive = generateUniqueWordsRecursive(['a', 'b', 'c', 'd']);
console.log("Unique Words : ", uniqueWordsRecursive);





const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  // Function to generate unique words recursively
  const generateUniqueWords = (characters, prefix = '') => {
    if (characters.length === 0) {
      return [prefix];
    }
  
    const uniqueWords = [];
  
    for (let i = 0; i < characters.length; i++) {
      const newCharacters = characters.slice(0, i).concat(characters.slice(i + 1));
      const newPrefix = prefix + characters[i];
      const newWords = generateUniqueWords(newCharacters, newPrefix);
      uniqueWords.push(...newWords);
    }
  
    return uniqueWords;
  };
  
  const uniqueWords = generateUniqueWords(shuffleArray(['b', 'd', 'c', 'a']));
  
  console.log("Unique Words:", uniqueWords);