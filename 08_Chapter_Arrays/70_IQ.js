
let num= [12, 20, 34, 45, 15];
let result= num.find(temp=> temp> 20);
console.log(result);

// findindex
let index = num.findIndex(n => n>20);
console.log(index);

// findlast

let findlast= num.findLast(temp => temp>20);
console.log(findlast);

let findlastindex= num.findLastIndex(temp => temp>20);
console.log(findlastindex);