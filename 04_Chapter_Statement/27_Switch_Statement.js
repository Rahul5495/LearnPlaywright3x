

/*switch (expression) {
    case value1:
        // code block
        break;       // IMPORTANT: stops fall-through
    case value2:
        // code block
        break;
    default:
        // runs if no case matches (optional)
} */

let num=3;
switch(num){
    case 1:
     console.log("ONE");
     break;
    case 2:
     console.log("TWO");
     break;
    case 3:
        let a = 10;
        let b = 30;
        console.log(a + b);
        console.log("THREE");
     break;
    case 4:
     console.log("FOUR");
     break;
    case 5:
     console.log("FIVE");
     break;
    case 6:
     console.log("SIX");
     break;
    case 7:
     console.log("SEVEN");
     break;
    case 8:
     console.log("EIGHT");
     break;
    case 9:
     console.log("NINE");
     break;
    default:
     console.log("PLEASE TRY AGAIN");
}
