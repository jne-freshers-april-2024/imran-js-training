// there are four type of scope 1)global scope 2)local scope var let const 
//3)function scope var 4)block scope

// Globale scope

// var message = "thinkinig every bit";

// function printMessage(){
//      console.log("Inside function accesible "+message);
// }

// console.log("Ouside function accesible "+message)



//local scope

// var message = "thinkinig every bit";

// function printMessage(){
//         var message = "thinkinig every bit";
//      console.log("Inside function accesible "+message);
// }

// console.log("Ouside function accesible "+message)


// Local scope 

// function printMessage(age){
//     if(age > 18){
//         let message = "thinkinig every bit";
//      console.log("Inside function accesible "+message);
//     }

   // console.log(message); not accesible
//}

//console.log("Ouside function accesible "+message) not accessible


// Function scope 


function outerFunction(){
     
    function innerFunction(){
          var message = "Thinking every bit";
          console.log(message);
    }
    innerFunction();
    //console.log(message); //not accesible
}

outerFunction();
//console.log(message); //not accessible



