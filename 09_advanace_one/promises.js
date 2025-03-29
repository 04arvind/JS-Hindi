const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise is consoumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
});

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"Arvind", password: "1234"})
        }
        else{
            reject('Error something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = false;
        let error = true;
        if(!error){
            resolve({username:"Rawat", password:"12345"})
        }
        else{
            reject('Error ! JS went wrong');
        }
    },1000)
})
async function consumePromiseFive(){
  try{
    const response =  await promiseFive
  console.log(response);
  } catch(error){
    console.log(error);
  }
}
consumePromiseFive();


// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);

//     const data = await response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log("E : ", error);
//   }
// }
// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))