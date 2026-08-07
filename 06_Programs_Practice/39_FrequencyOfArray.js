
let arr=[1,2,1,3,2]
const frequency = {};
for (let element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
}
for (let key in frequency) {
    console.log(`${key} appears ${frequency[key]} times`);
}