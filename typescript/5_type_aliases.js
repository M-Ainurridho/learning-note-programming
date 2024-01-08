"use strict";
// Type Aliases can reduce code duplication, keeping our code DRY. Below, we can see that the PersonObject type alias has prevented repetition, and acts as a single source of truth for what data a person object should contain.
const person1 = {
    name: 'Ridho',
    id: 1,
};
const person2 = {
    name: 'Alama',
    id: 2,
};
const sayHi = (person) => {
    return `Hi ${person.name}`;
};
const sayBye = (person) => {
    return `Bye ${person.name}`;
};
console.log(sayHi(person1));
