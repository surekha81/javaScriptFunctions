const squaredArray = (arr) => {
    var squaredValues = arr.filter(val => Number.isInteger(val) && val > 0 ).map(num => num * num)
    return squaredValues;
};

console.log(squaredArray([2,3,6,8,9]));

/*The arrow function does not create its own execution context, but takes it lexically 
The arrow function is anonymous: name is an empty string (contrary to function declaration which have a name)
arguments object is not available in the arrow function (contrary to other declaration types that provide arguments object)
*/
