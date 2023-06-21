let arrays = [
  { id: 1, name: "Amit", email: "Amit@gmail.com" },
  { id: 2, name: "Sujit", email: "Sujit@gmail.com" },
  { id: 3, name: "Joe", email: "joe@gmail.com" },
  { id: 4, name: "Manish", email: "Manish@gmail.com" },
  { id: 5, name: "Pankaj", email: "Pankaj@gmail.com" }
];

const findObjectPure = (input) => {
  let data;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i].id === input) {
      data = arrays[i];
      break;
    }
  }
  return data
}

const findObjectES6 = (input) => {
  return arrays.find(item => item.id === input);
}

// FINDING DATA USING VANILA JS (PURE JS)
let output1 = findObjectPure(3)
console.log(output1);

// FIND DATA USING METHOD
let output2 = findObjectES6(2)
console.log(output2);