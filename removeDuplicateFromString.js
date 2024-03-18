let str = "HelLo WoRlD from nEw world"
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
console.log(removeDuplicateFromString(str));



function removeDuplicateFromString2(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.toLowerCase().indexOf(char.toLowerCase()) === i) result += char;
  }
  return result;
}

console.log(removeDuplicateFromString2(str));



const removeDuplicateFromString3 = (str) => {
  const uniqueChars = new Set(str);
  console.log("str", uniqueChars);
  return [...str].filter(char => uniqueChars.has(char)).join('');
};
console.log(removeDuplicateFromString3(str)); // Output: "HelLoWRDfrmnEwd"