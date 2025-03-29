const user = {
    username:"Arvind",
    loginCount: 32,
    signedIn:true,
    getUserDetails : function(){
        // console.log("Got user details fromt the database");
        // console.log(`username: ${this.username}`)
        // console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function user2(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    // return this

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}
const userOne = new user2('Arvind',12,true);
const userTwo = new user2('ChaiAurCode',11,false);
console.log(userOne);
console.log(userTwo);