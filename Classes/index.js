
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking');
    }
}

const person = new Person('Ben');
person.walk();
