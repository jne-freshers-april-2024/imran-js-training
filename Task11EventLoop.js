// Event loop 
// Javascript is single thread it can excute code line by line
// beacause blocking function required long time

// function printNumbers(num){
//      while(num>0){
//         console.log(num);
//         num--;
//      }
// }

// console.log("Good to go.....");
// printNumbers(100);
// console.log("End of program");



// printNumbers function required long time for excution
// resolve this issue we use call back function
// setTimeout


console.log("Good to go.....");

setTimeout(()=>{
     console.log("Download the files");
},1000);



console.log("End of program");

//Then JavaScript engine places the setTimeout  
//function into a queue called a callback queue or a task queue:

// event loop continuously monitoring event loop and call stack

// javaruntime enviroment
// heap area(object) --> function call stack --> api--> ajax
                //           |   event loop  <-- callback queue