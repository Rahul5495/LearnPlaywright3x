
let side1 = 6;
let side2 = 5;
let side3 = 5;

if (side1 === side2  && side1 === side3) {
    console.log("Equilateral");
} else if (side1 === side2 || side1 !== side3) {
    console.log("Isosceles");
} else  {
    console.log("Scalene");
}
