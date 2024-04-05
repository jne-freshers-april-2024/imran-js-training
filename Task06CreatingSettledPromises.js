//Settled promises can be useful for situations where you need to 
//immediately handle a known value or error condition without performing 
//any asynchronous operations.

const resolvePromise = Promise.resolve("Issues have been resolved in the code");


resolvePromise.then(function(message){
     console.log(message);
})


const errorPromise = Promise.reject("Have some issues in the code means errors");

errorPromise.catch(function(error){
     console.log(error);
})