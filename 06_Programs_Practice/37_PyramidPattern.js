
let n=5;
let output = "";
for (let i = 1; i <= n; i++){
    output = "";
    for (let j = 1; j <=n- i; j++) {
        output += " ";
    }
    for (let k = 1; k <= (i * 2 - 1); k++){
        output += "*";
    }
    console.log(output);
}