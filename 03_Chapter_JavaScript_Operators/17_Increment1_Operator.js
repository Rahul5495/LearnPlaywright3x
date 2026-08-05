
 let a = 10;                    11, 11
 console.log(++a + a + a++);    11
 console.log(a);                11, 12

 let i = 1;                   1, 2
 let result = i++ + ++i;      3, 3
 console.log(result, i);


 let b = 10;                   11, 11
 console.log(++b + ++b);       12, 12
 console.log(b);

 let c = 34;                   34, 35
 let result1 = c++;      
 console.log(result1);
 console.log(c);  