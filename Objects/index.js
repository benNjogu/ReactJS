
const person = {
    name: 'Ben',
    walk() {
        console.log(this);
    }
}

person.walk();

const walk = person.walk.bind(person);
walk();//Returns person object
