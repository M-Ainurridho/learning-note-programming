// Type Aliases can reduce code duplication, keeping our code DRY. Below, we can see that the PersonObject type alias has prevented repetition, and acts as a single source of truth for what data a person object should contain.

type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const person1: PersonObject = {
    name: 'Ridho',
    id: 1,
};

const person2: PersonObject = {
    name: 'Alama',
    id: 2,
};

const sayHi = (person: PersonObject) => {
    return `Hi ${person.name}`;
};

const sayBye = (person: PersonObject) => {
    return `Bye ${person.name}`;
};

console.log(sayHi(person1));

type Animal = {
    name: string;
};

type Bear = Animal & {
    honey: boolean;
};

const bear: Bear = {
    name: 'Winnie',
    honey: true,
};
