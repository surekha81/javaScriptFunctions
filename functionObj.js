function sum1(a, b) {  
  return a + b;
}
var sum2 = function(a, b) {  
  return a + b;
}
var sum3 = (a, b) => a + b;  

console.log(typeof sum1 === 'function'); // => true  
console.log(typeof sum2 === 'function'); // => true  
console.log(typeof sum3 === 'function'); // => true  

//All ways of function creation generates the same function object
