
// Checking Arrays
// Check if something is an array

let arr= [23.12,56,43,55,98,66];

let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// map, filter, reduce
// every — ALL must pass
// GOTCHA: the missing ; below would make ASI glue the next line's [ ... ]
// into an index access -> TypeError. Always end these lines with ;

console.log([80,90,70].every(temp=> temp>=70));  //true
console.log([43,76,79].every(temp=> temp>=70));  //false

// some — AT LEAST ONE must pass

console.log([89,60,98].some(temp=> temp<70));   // true
console.log([89,79,86].some(temp=> temp<70));   // false
