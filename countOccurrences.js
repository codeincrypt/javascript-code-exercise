const string = "Hello World"

const countLetter = (str) => {
    let result = [...str].reduce((a,b) => { 
        a[b] = a[b] ? a[b] + 1 : 1
        return a
    }, {})
    return result
}
console.log("result", countLetter(string))  // 👉️ { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

const countLetter2 = (str) => {
  let result = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    result[char] = result[char] ? result[char] + 1 : 1
  }
  return result
}
console.log("result", countLetter2(string))  // 👉️ { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

const countLetter3 = (str) => {
  str = [...str]
  const counts = {};
  str.forEach(element => {
    counts[element] = (counts[element] || 0) + 1;
  });
  return counts;
}
console.log("result", countLetter3(string))  // 👉️ { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }