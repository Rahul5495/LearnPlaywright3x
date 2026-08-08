

/* if (condition) {
    // runs if condition is true
} else if (anotherCondition) {
    // runs if anotherCondition is true
} else {
    // runs if ALL conditions are false
} */


let marks=38;
if (marks>85){
    console.log("A");
} else if (marks>70 && marks<=85) {
    console.log("B");
} else if(marks>40 && marks<=70){
    console.log("C")
} else{
    console.log("Failed");
}