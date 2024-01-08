"use strict";
// class Person {
//     name: string;
//     isCool: boolean;
//     pets: number;
//     constructor(n: string, c: boolean, p: number) {
//         this.name = n;
//         this.isCool = c;
//         this.pets = p;
//     }
//     sayHello() {
//         return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
//     }
// }
// const person1 = new Person('Danny', false, 1);
// const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.
// console.log(person1.sayHello()); // Hi, my name is Danny and I have 1 pets
// Visibilty
// class Person {
//     readonly name: string;
//     private isCool: boolean;
//     protected email: string;
//     public pets: number;
//     constructor(n: string, c: boolean, e: string, p: number) {
//         this.name = n;
//         this.isCool = c;
//         this.email = e;
//         this.pets = p;
//     }
//     sayHello() {
//         return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
//     }
// }
// Summarized
class Person {
    constructor(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
}
class Programmer extends Person {
    constructor(name, isCool, email, pets, pL) {
        super(name, isCool, email, pets);
        this.programmingLanguage = pL;
    }
}
