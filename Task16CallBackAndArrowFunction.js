
// Noraml function


// function isEven(element){
//      if(element % 2 === 0){
//         return true;
//      }

//      return false;
// }

// console.log("element is even ? "+isEven(15));


// var isEven = (element) => {
//      return element % 2 === 0 ;   
// }

//console.log(isEven(50));

// Call back is you don't want to run the function to pass that function to another function arguments

// var result = [2,4,6,8].every(isEven);
// console.log(result);


// write a callback using a arrow function afer a ES6

// var result = [2,3,6,8].every((e)=>{
//      return e%2 === 0 ;
// })

// console.log(result);


// var result = [2,4,6,8].every((e)=> e%2 === 0 );

// console.log(result);

//How to remember this call function syntax
// if we use {} in callback then we need to return something and return keyword
// we passes function to another function as an argument

var result = [2,4,6,8].every((e)=> (e%2 === 0) );

console.log(result);


