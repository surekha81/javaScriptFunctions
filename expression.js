// Function expression: starts with "var"
var isTruthy = function(value) {  
  return !!value;
};

console.log(isTruthy())

// Function expression: an argument for .filter()
const doubledArray = function(arr) {
    var doubledValues = arr.filter(function(val) {return Number.isInteger(val) && val > 0 }).map(function(num) {return num * 2})
    return doubledValues;
}
console.log(doubledArray(numberedArray))


// Function expression : starts with "("
(function messageFunction(message) {
  return message + ' World!';
})('Hello');