let ad = 10;
let bc = '40';

let result = ad + bc;
console.log("Add one int and string  result is concatinated : "+result);

let aa = '10';
let bb = '40';

let res = bb - aa;
console.log("substration of to string the first converted to Number() : then sub : "+res);


let sas1 = 5 % -3;
console.log("Divident +ve then result +tve not consider diviser :: "+sas1);

let sas2 = -5 % 3;
console.log("Divident -ve then result -tve not consider diviser :: "+sas2);
let sas3 = -5 % -3;
console.log("Divident -ve then result -tve not consider diviser :: "+sas3);

let f1 = "ababc";
let f2 = "Bacd";

// for correct answer we need to convert first single formt toUpperCase() or toLowerCase
let kk = f2.toLowerCase()<f1.toLowerCase();

console.log(kk);

//
let af = 1 ?? console.log("hi beacause of null value");
console.log(af);