const str = "a$b%c&*d=e";

const removeSymbol = (str) => {
  const pureWord = (e) => {
    if (e.match(/[a-z]/g)) return true;
  };
  let arr = [];
  let array = str.split("");
  for (const item of array) {
    if (pureWord(item)) arr.push(item);
  }
  return arr;
};
console.log(removeSymbol(str));  // 👉️ [ 'a', 'b', 'c', 'd', 'e' ]


const result1 = str.match(/[a-z]/g);
console.log(result1);  // 👉️ [ 'a', 'b', 'c', 'd', 'e' ]