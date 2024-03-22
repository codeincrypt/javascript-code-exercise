// const trick1 = () => {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 100);
//   }
// };
// trick1(); // 👉️ 5 5 5 5 5


// const trick2 = () => {
//   let i;
//   for (i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 2);
//   }
// };
// trick2(); // 👉️ 5 5 5 5 5


// const trick3 = () => {
//   var a = [1, 2, 3];
//   a[10] = 99;
//   console.log(a[6]);
// };
// trick3(); // 👉️ undefined


// const trick4 = () => {
//   var x = 21;
//   var girl = function () {
//     console.log(x);
//     var x = 20;
//   };
//   girl();
// };
// trick4();  // 👉️ undefined


console.log(1 < 2 < 3); // 👉️ true
console.log(3 > 2 > 1); // 👉️ false


var a = '12';
if(isNaN(a)){
  console.log("NaN")
} else {
  console.log("NotNaN");
}
// 👉️ NotNaN