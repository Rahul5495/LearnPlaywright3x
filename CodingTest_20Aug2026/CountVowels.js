

let str="Hello World";
let str1= str.toLowerCase();

let count=0;

for (let i=1; i<=str1.length; i++){
    let ch= str1[i];

    if(ch==="a" || ch==="e" || ch==="i" || ch==="o" || ch==="u" ){
        count++;
    }
}
  console.log("Numbers of Vowels: " + count)