

// Code for running paraller promises


function fetchData(){
     return new Promise(function(resolve){
           setTimeout(function(){
               resolve({user:"Imran",company:"Thinkitive"});
           },5000);
     })
}

function fetchComments(){
    return new Promise(function(resolve){
          setTimeout(function(){
              resolve({comment:['good','very good','averge']});
          },1000);
    })
}


function fetchPosts(){
    return new Promise(function(resolve){
          setTimeout(function(){
              resolve({post:[1,2,3,4]});
          },10000);
    })
}


Promise.all([fetchData(),fetchComments(),fetchPosts()])
.then(function(result){
      const userData = result[0];
      const userComments = result[1];
      const userPosts = result[2];

      console.log(userData.user +"  "+userData.company);
      console.log(userComments);
      console.log(userPosts);
}).catch(function(error){
     console.log("Something wents wrong : "+error);
})

//Using Promise.all() allows you to efficiently handle multiple asynchronous operations 
//in parallel and wait for all of them to complete before proceeding with further processing.