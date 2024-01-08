"use strict";
// Variables Declaration
// Explicit
let fullname = 'Muhammad';
let lastname;
lastname = 'Ainurridho';
// Implicit | Infered
let ageOne = 22; // TS know it's a number
// ageOne = "22"; // Error "Type 'string' is not assignable to type 'number'."
// Union type
let ageTwo;
ageTwo = '21'; // No error
ageTwo = 21; // No error
// Primitive vs Reference type
let fruit1 = new String('Mango');
let x = 2;
let y = 1;
x = y;
y = 100;
console.log(x);
let point1 = { x: 1, y: 1 };
let point2 = point1;
point1.y = 100;
console.log(point2.y);
