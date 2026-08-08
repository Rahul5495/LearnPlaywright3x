
console.log(true + "Hello");
console.log("1"-1);
console.log(1-"1");
console.log("1"+1);
console.log(1+"1");
console.log(1-true);
console.log(true-false);
console.log(null-1);
console.log(1-null);
console.log(1+null);
console.log(null+undefined);
console.log(undefined+1);

for(let i=1; i<=50; i++){
    console.log(i);
}

let n=null;
//let v=n??"milk";
//console.log(v);

let b=n?? "default";
console.log(b);

let k=undefined;
let r=k ?? "number";
console.log(r);

