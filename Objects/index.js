
const person = {
    name: 'Ben',
    walk() {
        console.log(this);
    }
}

person.walk();//Returns the person object

const walk = person.walk;
walk();//Returns the window object
