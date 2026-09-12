
//  Array literal (Preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

//Array constructor
let scores = new Array(4);   // creates [empty x 3]
scores[0]= "1";
scores[1]= "23";
scores[2]= "34";
console.log(scores);

let scores2 = new Array(1, 2, 3);  //creates[1,2,3]
console.log(scores2);

let numbers= new Array(100, 200, 300, 400);
console.log(numbers);

let test= Array.of(10,20,30,40,50,60);
console.log(test.length);

// Array.from();
let chars= Array.from("Hello");
console.log(chars);

//["H", "e", "l", "l", "o"]
