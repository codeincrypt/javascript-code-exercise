const arr = [
  { id: "1", name: "BMW"},
  { id: "2", name: "Audi"},
  { id: "3", name: "Volvo"},
];

const findByIndexNumber = (index) => {
  let obj = arr[index]
  return obj
}

console.log(findByIndexNumber(0))  // 👉️ { id: '1', name: 'BMW' }
console.log(findByIndexNumber(2))  // 👉️ { id: "3", name: "Volvo"}

const popByIndexNumber = (index) => {
  return [...arr.slice(0, index),...arr.slice(index + 1)];
}
console.log(popByIndexNumber(1))  // 👉️ [ { id: '1', name: 'BMW' }, { id: '3', name: 'Volvo' } ]