// Pass by value code

// let x = 10;

// function passByValue(a){
//     x = 20; // value of changed
// }

// console.log("Pass By Value-> value is not changed of x :"+x);



// Pass by reference

// let obj = {name :"imran bagwan" , company:"Fresher"};

// function changeCompany(x){
//      x.company = "Thinkitive";
// }

// changeCompany(obj);

// console.log("It is example of pass by reference and company field is changed by using this ::=>> "+obj.company);


// In call by value create seperate copy of variable 
//and done changes of it on its scope

// In call by reference pass the only refrence of original 
//object and modification on original object

// function pushInToArray(str){
//    arr.push(str);
// }

// let arr = ["imran",'bagwan','sunbeam'];

// pushInToArray("modification");
// console.log(arr);


//In case of function
 
function callToOtherFunction(callback){
    callback();
}

function call(){
    console.log("Call to the call function");
}

callToOtherFunction(call);