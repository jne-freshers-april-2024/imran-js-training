// var v = 10;

// if(true){
//     var v = 20;
// }

// console.log("var redeclare and hoisted function/globel scope of var varible "+v);


// let keyword is blocked scope and it can not be hoisted we can not before it declare 
// we can not redeclare it

// let l = 50;
//  if(true){
//      let l = 100;
//      console.log("inside if block : "+l);
//  }

//  console.log("outsode block scope:"+l);


// Javascript engine excute the code in two phases 
// creation in creation phase varible declare and function defination declare the top of the code
// excution

// console.log("hoisting in case of var keyword : "+v);
// var v = 1;

// javascript engine hoisted code like this
// var v;
// console.log("hoisting in case of var keyword : "+v);
// v = 1;

// in case let it gives error



// function hoisting

let a = 200,
    b = 500;

let result = add(a,b);
console.log("Hoisted function result : "+result);

function add(a,b){
    return a+b;
}
   
