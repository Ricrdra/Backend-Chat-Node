class Person {

    static people = [{},];

    constructor(name, lastName, age) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        people.push(this._name);
    }

    get info() {
        return `${this._name} ${this._lastName} is ${this._age} years old`;
    }


    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
}

const people = {};


const brandon = new Person("Brandon", "Goiz", 25);


console.log(brandon.info);
