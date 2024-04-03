// scope of let is blocked scope
let x = 10;

// if(x>5){
//      let x = 20;
//      console.log("inside if block value of x: "+x);
// }

// console.log("value of x outside of if block : "+x);


// Var is attached to globale varible like windows but 
// Let is not attached with globale varible

// var v = 20;
// console.log("var attached with globle varible like windows : "+window.v);

// let l = 10;
// console.log("Incase of let keyword it not attached with globle varible :"+window.l);

//vat is globle varible it will print 6
// for(var v=0; v<=5; v++){
//     setTimeout(function(){
//         console.log(v);
//     },100)
// }

// for(var v =0; v<=5; v++){
//     (function(k){
//            setTimeout(function(){
//                 console.log(k);
//            },100);
//     })(v);
// }


// In 2009 ESC5 introduced
// In 2015 ESC6 introduced in features like let varible, arrow functions 

// for(let l=0; l<=5;l++){
//      setTimeout(function(){
//          console.log("to solve var keyword issue we use let keyword : "+l);
//      },100);
// }


// Arrow function in ESC6

// for(let l=0; l<=5;l++){
//     setTimeout(() => console.log("arrow function used: "+l));
// }


// We can redeclare var keyword 
// incase of let it can give you a error

// var num = 10;
// var num;
// console.log("var keyword redeclares don't have any issue: "+num);

// Let gives complie time error
// let k=100;
// let k=50;
// console.log("let keyword redeclares have any issue: "+num);


// var v = 10;

// if(true){
//     var v = 20;
// }

// console.log("var redeclare and hoisted function/globel scope of var varible "+v);



// const keyword
// we cant redeclare ressign hositing similare to let it is blocked scope
// const con = 100;

// if(true){
//      const con = 20;
//      console.log("const blocked scope : "+con);
// }
// //con = 50; // it is run time error (Assignment to constant variable)
// console.log("outside if block : "+con);




