// Declare a variable called person with a specific object type annotation
let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
};

person = {
    name: 'Ridho',
    location: 'Cinere',
    isProgrammer: true,
};

// person.isProgrammer = 'YES'; // ERROR: should be a boolean

// person = {
//     name: 'rama',
//     location: 'grogol',
// }; // ERROR: missing the isProgrammer property

// When defining the signature of an object, you will usually use an INTERFACE. This is useful if we need to check that multiple objects have the same specific properties and value types:

interface Mahasiswa {
    nim: string;
    name: string;
    age: number;
}

const mhs1: Mahasiswa = {
    nim: '10210070',
    name: 'Ridho',
    age: 22,
};

const mhs2: Mahasiswa = {
    nim: '10210046',
    name: 'Rifqi',
    age: 21,
};

// We can also declare function properties with function signatures. We can do this using old-school common JavaScript functions (sayHi), or ES6 arrow functions (sayBye):

interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
    sayHi(name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Ridho'));
console.log(sayStuff.sayBye('Ridho'));
