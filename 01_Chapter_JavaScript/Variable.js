

function scope(){
    //var---function scope
    //the entire function is scope for var

    if(true){
        var x=25;    //same scope as function
        let y=26;    //only inside this if block
     // console.log(y);
    }
    console.log(x);     // 10 (var is function scoped, still accessible)
    console.log(y);   // Error! (let is block scoped, not accessible here)
}
scope();