
let status = 0;
console.log(typeof status)

switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
// === Strict, value and data type both of them shoul be same.
// && ->  and gate
// ||  or gate
// & - bitwise, | bitwse, never use
// == -> loose comparsion - value or data type.
