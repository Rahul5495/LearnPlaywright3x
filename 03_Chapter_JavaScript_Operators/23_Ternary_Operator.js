// ## Ternary (Conditional) Operator
//condition, either this or either that
// condition ?  value(if true)  : value (if false)

let age=25;
let is_Rahul_Can_Drink= age>=25 ? "Yes":"No";
console.log("Rahul Can Drink?", is_Rahul_Can_Drink);

// ##interviewQuestions

let actualStatusCode=201;
let expectedStatusCode=200;
let testResult= actualStatusCode===expectedStatusCode ? "Pass":"Fail";
console.log(testResult);

let environment="Staging";
let baseUrl= environment=== "Production" ? "https://api.example.com":"https://staging-api.example.com";
console.log(baseUrl);

let isCI= true;
let browserMode= isCI ? "Headless": "Headed";
console.log(browserMode);

let reponseTime= 850;
let sla =1000;
let slaStatus= reponseTime<=sla ? "Within SLA" : "SLA breached";
// console.log('Response: ${reponseTime}ms - ${slaStatus}');
console.log(slaStatus);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);