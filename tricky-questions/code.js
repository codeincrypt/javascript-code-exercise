/*
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}; // 👉️ 5 5 5 5 5
*/

/*
  let i;
  for (i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 2);
  }
  // 👉️ 5 5 5 5 5
*/ 

/*
const trick3 = () => {
  var a = [1, 2, 3];
  a[10] = 99;
  console.log(a[6]);
};
trick3(); // 👉️ undefined
*/

/*
  var x = 21;
  var girl = function () {
    console.log(x);
    var x = 20;
  };
  girl(); // 👉️ undefined
*/

/*
(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);    // 👉️ 45
*/

/*
(function(a){
  return (function(){
    a = 23;
    console.log(a);
  })()
})(45);    // 👉️ 23
*/

/*
console.log(1 < 2) // 👉️ true
console.log(1 < 2 < 3) // 👉️ true
console.log(3 > 2 > 1) // 👉️ false
*/

/*
var b = '12';
if(isNaN(b)){
  console.log("NaN")
} else {
  console.log("NotNaN");
}
// 👉️ NotNaN
*/

/*
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
} // 👉️ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

*/

/*
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
} // 👉️ undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined
*/


/*
const person = {
    name: 'John Doe',
    age: 30,
    gender: 'male',
    address : {
        area: 'Street 102',
        city: "New York",
        district: 'New York'
    }
};

// let {name, address:{city:a}} = person 
let {name, address:{city}} = person 
console.log(name, city)
*/