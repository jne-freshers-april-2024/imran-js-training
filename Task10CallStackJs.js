// JavaScript engine uses a call stack to manage execution contexts.
//The call stack uses the stack data structure that works 
//based on the LIFO (last-in-first-out) principle.

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

// function call stack main() average() add()
// add( ) excuted
// averge( ) excuted
// main() excuted