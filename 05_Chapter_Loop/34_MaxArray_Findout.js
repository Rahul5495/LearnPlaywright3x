
let arr=[5, 3, 7, 2, 9, 1];
let n=arr.length;

let max=arr[0];
for(let i=1; i<n; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);