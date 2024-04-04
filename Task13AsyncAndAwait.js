//write asynchronous code  using JavaScript  async/  await keywords.

//ES2017 introduced the async/await keywords that build on top of promises, allowing you 
//to write asynchronous code that looks more like synchronous code and is more readable. 
//Technically speaking, the async / await is syntactic sugar for promises.


// The async keyword allows you to define a function that handles asynchronous operations.

// async function sayHi(){
//     return "Hi";
// }


// sayHi().then((x)=>{
//     console.log(x);
// })

// sayHi().then(console.log);

let sayHi = async()=>{console.log("Hiiiii")};
console.log(sayHi());
