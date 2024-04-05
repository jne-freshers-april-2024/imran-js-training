

// code using callback

function fetchData(callback){
     setTimeout(function(){
         let data = {name :"imran",company:"Thinkitive"};
         callback(null,data);
     },1000);
}

fetchData(function(error , result){
     if(error){
         console.log("Error occured : "+error);
     }else{
        console.log("Result is : "+result.name+" "+result.company);
     }
})


// code using promeses

function fetchDataNew(){
    return new Promise(function(resolve, reject){
          setTimeout(function(){
              let data = {name :"imran" , company:"Thinkitive"};
               resolve(data);
          },1000);
    })
}

fetchDataNew().then(function(resolve){
      console.log("Resolve : "+resolve.name+" "+resolve.company);
}).catch(function(reject){
     console.log("Something wents wrong ");
})

// Using Promises: We call fetchData() to initiate the asynchronous operation. 
// We chain .then() to handle the successful resolution of the promise and .catch() 
// to handle any errors that might occur during the operation.