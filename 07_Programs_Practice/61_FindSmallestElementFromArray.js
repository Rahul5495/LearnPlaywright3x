
let arr=[23,16,43,78,11,17];
let smallest = arr[0];

for (let i = 1; i < arr.length; i++){
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log(smallest);