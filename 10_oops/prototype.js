// let myName = "Arvind     ";
// let mychannel = "Chai       ";

// // console.log(myName.trim().length);
// console.log(myName.truelength());


let myHeros = ["Thor", "Spiderman"]
let heroPower = {
    Thor : "Hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}
Object.prototype.arvind = function(){
    console.log(`arvind is present in all objects`);
}

Array.prototype.heyarvind = function(){
    console.log(`Rawat says hello`);
}

// heroPower.arvind();
// myHeros.arvind();

// myHeros.arvind();
// myHeros.heyarvind();
// heroPower.heyarvind();


     // inheritance
const User = {
    name: "Chai",
    email: "Chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime:true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User;
// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)



let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`)
}
anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();