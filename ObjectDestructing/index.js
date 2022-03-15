
const address = {
    street: '',
    city: '',
    country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

//The above three lines can be simplified as below.
const { street: st, city, country } = address;
