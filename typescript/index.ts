// Variables
// Explicit
let fullname: string = 'Muhammad';
let lastname: string;
lastname = 'Ainurridho';

// Implicit | Infered
let ageOne = 22; // TS know it's a number
// ageOne = "22"; // Error "Type 'string' is not assignable to type 'number'."

// Union type
let ageTwo: string | number;
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

// Array
const ids: number[] = [1, 2, 3, 4, 5]; // can contains only number
const names: string[] = ['rama', 'rifqi', 'evan']; // can contains only strinng
const options: boolean[] = [true, false, true]; // can contains only boolean
const mahasiswas: object[] = [
    { name: 'ridho', age: 22 },
    { name: 'krisna', age: 21 },
]; // can contains only object
const arrOne: any[] = ['amanda', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
// ids.push("7"); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

// Union multiple type array
let personOne: (string | number | boolean)[] = ['ridho', 22, true];
personOne[0] = 100;
// person[1] = { isActive: true }; // Error - person array can't contain objects

// Tuple | fixed size array
let personTwo: [string, number, boolean] = ['rama', 21, true];
// personTwo[0] = false; // Error - Value at index 0 can only be a string
console.log(personTwo);
