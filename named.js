// Hoisted variable
console.log(hello('Guest')); // => 'Hello Guest!'  
// Named function
console.log(hello.name)       // => 'hello'  
// Variable holds the function object
console.log(typeof hello);    // => 'function'  
function hello(name) {  
  return `Hello ${name}!`;
}

/*The function declaration function hello(name) {...} create a variable hello that is hoisted to the top of the current scope. 
hello variable holds the function object and hello.name contains the function name: 'hello'.
*/
