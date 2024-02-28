/**
 * Doubles the array.
 *
 * @return {array} The doubled array
 */

/*
  creates a new method called double for the Array object in JavaScript. When called on an array, it returns a new array containing the elements of the original array
 */

let arr = [1,2,3,4,5,6,7]

Array.prototype.double = function(){
  let array1 = []
  for (let i = 0; i < 2; i++) {
      array1.push(...this)
  }
  return array1
}
console.log(arr.double());

Array.prototype.double = function(){
  return [...this, ...this] 
}
console.log(arr.double());

Array.prototype.double = function(){
  let array = []
  for (let i = 0; i < arr.length; i++) {
      array.push(arr[i], arr[i])
  }
  return array
}
console.log(arr.double());