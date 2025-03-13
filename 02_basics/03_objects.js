// singleton
// Object.create  // in this singleton banta hai

//Object literals :

const mySym = Symbol("key1");

// isme singleton nahi banta hai
const JsUser = {
    name:"Arvind",
    age:"18",
    "full name":"Arvind Rawat",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    location:"Jaipur",
    email:"arving@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday", "Tuesday"]
}  
// console.log(JsUser.name); // console.log(JsUser.age);
// console.log(JsUser["name"]);
// console.log(JsUser["email"]);

// console.log(JsUser.full name); // wrong, can not do this, 
// console.log(JsUser["full name"]); // correct

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // it should be symbol but it is string, 
// console.log(JsUser[mySym]); // undefined beca


JsUser.email = "rawat@gmail.com";
// Object.freeze(JsUser); // obj email is frozen , now can't change email further.
JsUser.email = "arvindrawat@microsoft.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello, How are you?");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello, JS User, ${this.name}`);
}
console.log(JsUser.greeting2());