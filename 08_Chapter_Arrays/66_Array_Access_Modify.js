
// Accessing & Modifying

let statuses= ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-3));

console.log(statuses.at(-4));

statuses[1]="blocked";
statuses[3]="fail";
console.log(statuses);

console.log(statuses.length);