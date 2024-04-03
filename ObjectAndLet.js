let formated = true;

let num ;

console.log(num);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(NaN/2);
console.log(NaN == NaN);

let s = "i\'m imran bagwan";
console.log(s);

let str = "imran";

str[0] = 'I';

console.log(str);


let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName);
console.log(contact['address']['city']);

let num1 = 120_12_25; // this is the numaric seperacter to increase readability
console.log(num1);


let person={
    name : "imran",
    age : 24,
    company : "Thinkitive"
}

console.log(person);
delete person.age;
console.log(person);