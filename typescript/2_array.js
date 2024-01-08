"use strict";
// Array
const ids = [1, 2, 3, 4, 5]; // can contains only number
const names = ['rama', 'rifqi', 'evan']; // can contains only strinng
const options = [true, false, true]; // can contains only boolean
const mahasiswas = [
    { name: 'ridho', age: 22 },
    { name: 'krisna', age: 21 },
]; // can contains only object
const arrOne = ['amanda', 1, true]; // any basically reverts TypeScript back into JavaScript
ids.push(6);
// ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// Union multiple type array
let personOne = ['ridho', 22, true];
personOne[0] = 100;
// person[1] = { isActive: true }; // Error - person array can't contain objects
// Tuple | fixed size array
let personTwo = ['rama', 21, true];
// personTwo[0] = false; // Error - Value at index 0 can only be a string
console.log(personTwo);
