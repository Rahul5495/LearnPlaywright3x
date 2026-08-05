
let rows =4;
let output="";

for(let i=1; i<=rows; i++ ){
    output ="";
    for(let j=1; j<=i; j++){
        output +="*";
    }
    console.log(output);
}

/*let pattern = "";
for (let i = n; i >= 1; i--) {
    pattern = '*'.repeat(i);
    console.log(pattern);
} */