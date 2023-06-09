let array = [ 
  {name:'John', id:3}, 
  {name:'Akash', id:1},  
  {name:'Amit', id:2}
]
// using filter es6 function to filter the array
const removeElem = (id) => {
  return array.filter((item) => item.id !== id);
}

let output = removeElem(2)
console.log("output", output);