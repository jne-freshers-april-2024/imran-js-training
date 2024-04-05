// Understant the Promises

const userLeft = false;
const userWatchingGames = false;

function watchTutorialCallBack(callback ,errorCallBack){
     if(userLeft){
        errorCallBack({
             name : "Not Avalible",
             message :"userLeft"
        });
     }else if(userWatchingGames){
        errorCallBack({
            name :"Watching Games",
            message : "User is Busy"
        });
     }else{
        callback("Please ThumbesUP Or Substcribe ");
     }
}

watchTutorialCallBack((userActivity)=>{
     console.log(userActivity);
},(userStatus)=>{
    console.log(userStatus.name +"  "+userStatus.message);
});


// replace callback to promises using above code
function watchTutorialPromises(){
    return new Promise((resolve,reject)=>{
        if(userLeft){
            reject({
                 name : "Not Avalible",
                 message :"userLeft"
            });
         }else if(userWatchingGames){
            reject({
                name :"Watching Games",
                message : "User is Busy"
            });
         }else{
            resolve("Please ThumbesUP Or Substcribe ");
         }
    })
    
}

watchTutorialPromises().then((userMessage)=>{
     console.log(userMessage);
}).catch((userActivity)=>{
    console.log(userActivity.name+" "+userActivity.message);
})

