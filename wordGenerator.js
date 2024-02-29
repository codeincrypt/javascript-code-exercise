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