
const first = [1, 2, 3];
const second = [4, 5, 6];
//One way to combine
const combined = first.concat(second);
//the below is prefered mainly if you want to add elements in between
const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2);

//with spread operator we can easily clone an array
const clone = [...first];
console.log(first);
console.log(clone);

//can also be used on objects
const first1 = { name: 'Ben' };
const second2 = { job: 'Instructor' };

const combined3 = { ...first1, ...second2, location: 'Muranga' };
console.log(combined3);

//can also be used to clone an object
const clone1 = { ...first1 };
console.log(clone1);
