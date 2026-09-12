
let browsers =['chrome', 'firefox', 'safari', 'opera', 'edge'];
//console.log(browsers.length);

browsers.pop();
//console.log(browsers);

let removed= browsers.shift();
//console.log(browsers);
//console.log(removed);

for(let i=0; i< browsers.length; i++){
   // console.log(browsers[i]);
    if(browsers[i]=="opera"){
              console.log("Opera doesn't support Automation Now!");
    }
} 