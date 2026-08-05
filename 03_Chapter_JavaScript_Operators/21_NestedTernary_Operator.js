
// Multiple Condition

let age = 17;
// age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_rahul_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(`Can rahul Drink? : ${is_rahul_enjoy}`);

// ##interviewQuestions

let statusCode=404;
let category=
         statusCode < 300 ? "Success" : statusCode < 400 ? "Redirect" : statusCode < 500 ? "Client Error" : "Server Error";
          console.log(`Status ${statusCode}: ${category}`);
          // console.log("Status :" + statusCode, category);

let temp = 10;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("Temperature:", temp, "| Feel:", feel);
