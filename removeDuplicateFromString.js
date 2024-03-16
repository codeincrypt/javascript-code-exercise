// METHOD : 1 VANILLA JS / PURE JS
function removeDuplicateFromString(str) {
  let uniqueChars = '';
  let encountered = new Set();
  for (let char of str) {
      if (!encountered.has(char)) {
          uniqueChars += char;
          encountered.add(char);
      }
  }
  return uniqueChars;
}
console.log(removeDuplicateFromString("HelLo WoRlD from nEw world"));



function removeDuplicateFromString2(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.toLowerCase().indexOf(char.toLowerCase()) === i) result += char;
  }
  return result;
}

console.log(removeDuplicateFromString2("HelLo WoRlD from nEw world"));
