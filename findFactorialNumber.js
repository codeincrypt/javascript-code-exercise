const factorial = (n) => {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}
console.log(factorial(5));  // 👉️ 120
console.log(factorial(6));  // 👉️ 720