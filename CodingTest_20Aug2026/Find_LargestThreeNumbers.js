
let a=15;
let b=20;
let c=18;

let largest;

if(a>=b && a>=c){
    largest= a;
} else if (b>=a && b>=c){
    largest= b;
} else{
    largest= c;
}

console.log(largest);