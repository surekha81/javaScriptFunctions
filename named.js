// Hoisted variable
console.log(hello('Guest')); // => 'Hello Guest!'  
// Named function
console.log(hello.name)       // => 'hello'  
// Variable holds the function object
console.log(typeof hello);    // => 'function'  
function hello(name) {  
  return `Hello ${name}!`;
}
