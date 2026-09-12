
let scores= [45, 87, 78, 77, 60, 71];

let grades= scores.map(item_score=> item_score> 70 ? "Pass": "Fail");
console.log(grades);

// Map is generally used whenever we want to 
// transform the array into a new array of the same size. 

// Filter

let passing = scores.filter(temp => temp>= 70);
console.log(passing);
