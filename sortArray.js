let arr = [20,120,111,215,54,78];

let arrayloop = arr;

for (var i = 1; i < arrayloop.length; i++){
  for (var j = 0; j < i; j++){
    if (arrayloop[i] < arrayloop[j]) {
      var x = arrayloop[i];
      arrayloop[i] = arrayloop[j];
      arrayloop[j] = x;
    }
  }
}

console.log("Sorted Array", arrayloop);  // 👉️ [ 20, 54, 78, 111, 120, 215 ]
console.log("Last Second Value", arrayloop[arrayloop.length - 2])   // 👉️ 120

// USING SORT() ES6 FUNCTION
let sortedArray = arr.sort((a, b) => a - b)

console.log("Sorted Array using sort fn", sortedArray);  // 👉️ [ 20, 54, 78, 111, 120, 215 ]
console.log("Last Second Value using Sort fn", sortedArray.at(-2)); // 👉️ 120

const secondToLast = sortedArray.reverse()[1];
console.log("Last Second Value using reverse fn", secondToLast); // 👉️ 120