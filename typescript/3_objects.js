"use strict";
// Declare a variable called person with a specific object type annotation
let person;
person = {
    name: 'Ridho',
    location: 'Cinere',
    isProgrammer: true,
};
const mhs1 = {
    nim: '10210070',
    name: 'Ridho',
    age: 22,
};
const mhs2 = {
    nim: '10210046',
    name: 'Rifqi',
    age: 21,
};
let sayStuff = {
    sayHi(name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi('Ridho'));
console.log(sayStuff.sayBye('Ridho'));
