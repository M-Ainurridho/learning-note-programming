// Variables
// Explicit
var fullname = 'Muhammad';
var lastname;
lastname = 'Ainurridho';
// Implicit | Infered
var ageOne = 22; // TS know it's a number
// ageOne = "22"; // Error "Type 'string' is not assignable to type 'number'."
// Union type
var ageTwo;
ageTwo = '21'; // No error
ageTwo = 21; // No error
// Primitive vs Reference type
var fruit1 = new String('Mango');
var x = 2;
var y = 1;
x = y;
y = 100;
console.log(x);
var point1 = { x: 1, y: 1 };
var point2 = point1;
point1.y = 100;
console.log(point2.y);
// Array
var ids = [1, 2, 3, 4, 5]; // can contains only number
var names = ['rama', 'rifqi', 'evan']; // can contains only strinng
var options = [true, false, true]; // can contains only boolean
var mahasiswas = [
    { name: 'ridho', age: 22 },
    { name: 'krisna', age: 21 },
]; // can contains only object
var arrOne = ['amanda', 1, true]; // any basically reverts TypeScript back into JavaScript
ids.push(6);
// ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
// Union multiple type array
var personOne = ['ridho', 22, true];
personOne[0] = 100;
// person[1] = { isActive: true }; // Error - person array can't contain objects
// Tuple | fixed size array
var personTwo = ['rama', 21, true];
// personTwo[0] = false; // Error - Value at index 0 can only be a string
console.log(personTwo);
