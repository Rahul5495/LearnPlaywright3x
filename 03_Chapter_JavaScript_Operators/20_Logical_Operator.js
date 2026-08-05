// && -> AND Gate
// || -> OR Gate

let a=false;
let b=true;

console.log(a || b);
console.log(a && b);
console.log(!a); 

let data=95;
if (data >= 90 && data <= 100) {
    console.log("A");
} else if (data >= 80) {
    console.log("B")
} else if (data >= 70) {
    console.log("C");
} else if (data >= 60) {
    console.log("D");
} else if(data < 60) {
    console.log("F")
} else{
    console.log("Don't come to school");
}
    