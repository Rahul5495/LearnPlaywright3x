
let arr=[10, 13, 12, 14, 16, 11];

let largest=arr[0];

for (let i=1; i<=arr.length; i++){
    if(arr[i]> largest){
        largest=arr[i];
    }
}
   console.log("Largest Number Is: " + largest);