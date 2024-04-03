
// How to declare Array
let player = new Array(10);

// Arrays methods
let arr = ['imran','bagwan','thinkitive technologies'];
console.log("Print the element : "+arr);


arr.push('abc');
console.log("Add element at the end : "+arr);

// Add element at the start of array
arr.unshift('xyz');
console.log("unshift : "+arr);

//delete element at the end pop
arr.pop();
console.log("pop : "+arr);

//delete element at the start of array
arr.shift();
console.log("shift : "+arr);

// Add element to array
arr.push("abc");
arr.push("anket");
arr.push("prabhat");

// Extract the element 1,2 index from existing array
const slice = arr.slice(1,3);
console.log("Slice : "+slice);

// Check the index of array element
let ab = arr.indexOf('bagwan');
console.log("index of bagwan in array : "+ab);

// How to check array is present
console.log(Array.isArray(arr));