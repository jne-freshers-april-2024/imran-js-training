// How to use if conditional statement
function loop(n){
     if(n>=18){
        console.log("you can vote");
     }
}

loop(24);

let array2 = [1,2,3,5,6,7,8,9,10];

// how to use for loop to print array element
for(let i=0 ; i<array2.length ; i++){
   console.log(array2[i]+" -- ");
}



// iterator over the iterator object 
for(let l of array2){
   console.log(l+" -- ");
}


// iterator over the property of object

const person = {name:"Imran ",surname:"Bagwan ",company:"Thinkitive"};

let text = "";

for(const c in person){
   text +=person[x];
}

console.log("co"+text);


