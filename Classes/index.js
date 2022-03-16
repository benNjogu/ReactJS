
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking');
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teaching');
    }
}

const teacher = new Teacher('Ben', 'bsc');
teacher.walk();
