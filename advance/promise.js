const promiseOne = new Promise(function(resolve, reject){
    // DB calls, network call, cryptography
    // Do an async task

    setTimeout(function(){
        // console.log("Async task is complete!!");
        resolve()
    }, 2000)
})

promiseOne.then(function(){
    // console.log("Promise is comsumed!!");
})

// Next method

new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 2 complete");
        resolve()
    }, 1000)
}).then(function(){
    // console.log("primise 2 complete");
})

// three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "kabi", email:"kabi@example.com"})
    })
}, 1000)

promiseThree.then(function(user){
    console.log(user);
})

// Four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let Error = false
        if (!Error) {
            resolve({username: "kabi", password: "1234"})            
        }
        else{
            reject('Something went wrong!')
        }
    }, 1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("the promise is either resolved or rejected");
})