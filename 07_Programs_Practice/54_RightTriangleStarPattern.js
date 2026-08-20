
let rows =4;
let output="";

for(let i=1; i<=rows; i++ ){
    output ="";
    for(let j=1; j<=i; j++){
        output +="*";
    }
    console.log(output);
}

console.log("------------");

/*let pattern = "";
for (let i = n; i >= 1; i--) {
    pattern = '*'.repeat(i);
    console.log(pattern);
} */

    for (let k=1; k<=rows; k++){
        for(let l=1; l<=k; l++){
            process.stdout.write("*");
        }
        console.log(" ");
    }