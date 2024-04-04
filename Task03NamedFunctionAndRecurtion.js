
// Function call itself again and again

function countDown(num){
       if(num===0){
            return;
       }
       countDown(num-1);
       console.log(num);
}

countDown(10);

function printNumbersReverseOrders(num){
    console.log(num);
    if(num >0){
         printNumbersReverseOrders(num-1);
    }
}


function additionOfFirstNatureNumber(num){
       if(num<=1){
           return num 
       }
       return num + additionOfFirstNatureNumber(num-1);
}

let addition = additionOfFirstNatureNumber(5);
console.log("Addition of n nature Number : "+addition);


