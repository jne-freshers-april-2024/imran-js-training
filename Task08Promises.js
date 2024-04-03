// Using callbacks to deal with an asynchronous operation
// promise encapsulated Asyncronuse Operations
// To avoid this callback hell issue, ES6 introduced the promises that allow you to write asynchronous code in more manageable ways.




// function getUsers(callback){
//    setTimeout(()=>{
//          callback([
//                {username:"imran",company:"Thinkitive"},
//                {username:"Rushikesh",company:"Thinkitive"}
//          ]);
//    },1000);
// }

// function findUser(username, callback){
//     getUsers((users)=>{
//         const userfinded = users.find((user)=>user.username == username);
//         callback(userfinded);
//     })
// }

// findUser("imran",console.log);

// By definition, a promise is an object that encapsulates the result of an asynchronous operation

// THREE state of promise 1)pending 2)filled 3)rejected

// const promise = new Promise((resolve,reject)=>{
      
//     // required code
//     if(success){
//         resolve(result);
//     }else{
//         reject(error);
//     }
// })


// The promise constructor accepts a callback function that typically performs an asynchronous operation. This function is often referred to as an executor.

// function getUser(){
//      return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//              resolve([
//                 { username:"imran" , company:"Thinkitive"},
//                 { username:"rushi" , company:"Thinkitive"}
//              ]);
//         },1000);
//     })
// }

// function onFullFilled(users){
//     console.log(users);
// }

// const promise = getUser();

// promise.then(onFullFilled);


// If case Promise is not reject
// function getUser(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//             resolve([
//                { username:"imran" , company:"Thinkitive"},
//                { username:"rushi" , company:"Thinkitive"}
//             ]);
//        },1000);
//    })
// }



// const promise = getUser();

// promise.then((user)=>{
//     console.log(user);
// });


//If case Promise is reject
// function getUser(){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//             if(resolve){
//                 resolve([
//                     { username:"imran" , company:"Thinkitive"},
//                     { username:"rushi" , company:"Thinkitive"}
//                  ]);
//             }else{
//                 reject("Promise is rejected ");
//             }
//        },1000);
//    })
// }


// function onFullFilled(users){
//     console.log(users);
// }

// function onRejected(error){
//     console.log(error);
// }
//  promise.catch((error)=>{
//         console.log(error);
// })
// const promise = getUser();

// promise.then(onFullFilled , onRejected);


// we have methode then catch and finally


// In case of get JSON data from server side and disply data in webpage

let p = new Promise((resolve,reject)=>{
     let num = 1 - 2;
     if(num===3){
        resolve('Success');
     }else{
        reject('Have some error');
     }
})


p.then((message)=>{
     console.log("inside then "+message);
}).catch((message)=>{
    console.log("inside cath block "+message);
})