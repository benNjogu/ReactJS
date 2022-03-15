
const person = {

    talk() {
        setTimeout(function () {
            console.log('this', this);
        }, 100);

    }
}

person.talk();
//in the above, the this returns reference to the window object
