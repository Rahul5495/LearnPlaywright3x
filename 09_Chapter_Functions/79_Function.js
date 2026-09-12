
// Without functions — repeated logic
/* let score1 = 86;
let result1= score1 >=70 ? "Pass": "Fail";
console.log(result1);

let score2= 67;
let result2= score2 >=70 ? "Pass": "Fail";
console.log(result2); */

//Define
function getResult(score){
    return score >= 70 ? "Pass" : "Fail";
}

// Calling
console.log(getResult(85));
console.log(getResult(69));