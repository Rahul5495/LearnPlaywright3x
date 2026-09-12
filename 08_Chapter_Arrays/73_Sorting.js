
//  alphabetical by default 
let fruits= ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let score = [4,3,2];
console.log(score.sort());

let nums= [10, 1, 21, 2];
console.log(nums.sort());    //1,2,10,21 -

// Natural Sorting - Lexicographic / string sort 
// Proper Sorting, Asc , Desc

console.log(nums.sort((a, b) => a-b));

nums.sort((a,b) => b-a); // Desc
console.log(nums);
nums.reverse();
console.log(nums);