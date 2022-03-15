
const person = {

    talk() {
        setTimeout(() => console.log('this', this), 100);

    }
}

person.talk();
//with arrow functions this inherits this in the context in which it was defined.
