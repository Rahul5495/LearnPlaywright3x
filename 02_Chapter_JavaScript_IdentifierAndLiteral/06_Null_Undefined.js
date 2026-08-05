/* Undefined
  undefined  ->  A variable exists, but it has not been assigned any value yet.
                   JavaScript itself sets this automatically. */

let firstName;      //declared but not assigned
console.log(firstName);
console.log(typeof firstName);

/* Null
  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".  It is intentional absence of any value. */
    
let surName=null;
console.log(surName);
console.log(typeof surName);

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/


    