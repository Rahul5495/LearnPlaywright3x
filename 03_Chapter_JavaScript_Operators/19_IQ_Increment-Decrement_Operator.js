
let a = 100;
console.log(a++ + ++a +a++ + ++a);
console.log(a);
// A =a++ A=100, a=101
// B=++a  B=102, a=102
// C=a++  C=102, a=103
// D=++a  D=104, a=104
// total=408,  a=104

let b = 37;
console.log(--b + b--);
console.log(b);
// A=--a  A=36, b=36
// B=a--  B=36, b=35
//total=72, b=35

let c= 5; 
let d = c-- - --c; 
console.log(d, c);

// A=c--  A=5, c=4
// B=--c  B=3, c=3
//Total=2, c=3

let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
// A=i++  A=1, i=2
// B=++i  B=3, i=3
// r= 1>1? 1:3, r=3