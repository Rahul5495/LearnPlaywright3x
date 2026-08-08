
let arr=[1,2,3,4,5]
let rev=[];

 for(let i=arr.length-1; i>=0; i--){
    rev.push(arr[i]);
 }
 console.log(rev.join(" "));