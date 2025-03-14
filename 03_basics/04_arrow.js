const user = {
    username : "Arvind",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this)
    }
    
}
// user.welcomeMessage()
// user.username= "Sam"
// user.welcomeMessage()

// console.log(this);

/*
function chai (){
    let usrname = "Arvind";
    console.log(this);  // console.log(this.username);
}
chai(); */


// const chai = function (){
//     let userName = "hitesh"
//     console.log(this.userName);
// }


const chai = () =>{
    let userName = "hitesh"
    console.log(this); //console.log(this.userName);
}
// chai();

          // arrow function : 
// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }
          //or
// const addTwo = (num1, num2)=> num1+num2;  // It is implicit return . 

const addTwo = (num1, num2)=>({username : "Arvind"});

console.log(addTwo(3,4));