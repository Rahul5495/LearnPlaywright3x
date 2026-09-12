
let a= [3,5];
let b= [7,0];

let c= a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
// ... all the eleement

let d= [...a,...b];
console.log(d);

// Join 
// array into bug string

let s= ["pass", "fail", "skip"].join(" | ");
console.log(s);