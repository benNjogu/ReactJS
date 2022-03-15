
const person = {
    name: 'Ben',
    walk() { },
    talk() { }
}

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';
