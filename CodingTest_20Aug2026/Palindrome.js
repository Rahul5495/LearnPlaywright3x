

let str= "madam";

let reversed="";

for (let i=str.length-1; i>=0; i--){
    reversed= reversed + str[i];
} 
 if(str===reversed){
    console.log("palindrome");
 } else{
    console.log("Not a palindrome");
 }

