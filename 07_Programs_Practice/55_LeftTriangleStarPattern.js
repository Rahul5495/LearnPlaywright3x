
let rows=4;
let output = "";
for (let i = rows; i >= 1; i--) {
    output ="";
    for (let j = 1; j <= i; j++) {
        output += "*";
    }
    console.log(output);
}

console.log("--------------");

for (let k=rows; k>=1; k--){
        for(let l=1; l<=k; l++){
            process.stdout.write("*");
        }
        console.log(" ");
    }