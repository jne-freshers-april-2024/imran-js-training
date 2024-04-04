// callback mechaniusm that keep track all function call

// call stack based on last-in-first-out principle
// globale excution context and function execution context

// main() global() for global excution context


function add(a,b){
    return a+b;
}

function average(a,b){
     return add(a,b)/2;
}

let result = average(10,20);
console.log("call back result : "+result);

//callback excetion contect
//main() average() add()
//main() average()
//main()
// recursive call of function js engine give stack-overflow error

// JavaScript is a single-threaded programming language  execute code asyschronous for Asychronus excution of use event loop