// Concat 
let str1 = "imran";
let str2 = "bagwan";
const result = str1.concat(" ",str2);
const res = str1.concat(str2);
console.log("concat() : "+res);
console.log("String concat example :: "+result);

// trim method
let s = "  imran      ";
console.log("Trim applied on s string :: "+s.trim());

// toLowerCase and toUpperCase
let sa = "IMRAN";
console.log("toLowerCase method : "+sa.toLowerCase());

let sq = "bagwan";
console.log("toUpperCase method : "+sa.toUpperCase());


// charAt(2); print character at index 2 start with 0
let ab = "Hello world";
console.log("charAt(2) :: "+ab.charAt(2));

//indexOf('world')
console.log("indexOf(world) :: "+ab.indexOf('world'));

//substring to extract from string
const str = 'Hello World';
const substring = str.substring(6, 11);
console.log("substring :: "+substring);

// split
const sd = 'imran,bagwan,company,thinkitive,baner,teerthTechnospace';
const abc = sd.split(',');
console.log("split by ,");
console.log(abc);

const strn = 'apple,banana,orange';
const fruits = strn.split(',');
console.log(fruits);

const strk = 'Hello World';
const startsWithHello = strk.startsWith('Hello');
const endsWithWorld = strk.endsWith('World');

const strp = 'Hello World';
const newStr = strp.replace('World', 'Universe');