// using clouser we can write code more effective way
//Lexical scoping defines the scope of a variable by the position of 
//that variable declared in the source code
//According to lexical scoping, the scopes can be nested and the inner function 
//can access the variables declared in its outer scope.


// let name = 'Imran';

// function greeting() { 
//     let message = 'Thinking every bit';
//     console.log(message + ' '+ name);
// }

// greeting();


function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    return sayHi;
}
let hi = greeting();
hi(); // still can access the message variable
// A closure is a function that preserves the outer scope in its inner scope.