// stack(used in primitive types), Heap(used in Non-primitive types)

// heap concept : 
let myName = "Arvind Rawat";    
let anothername = myName;
anothername = " chai aur code";
console.log(anothername);
console.log(myName);

// stack concept : 
let userOne={
    email: "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "rawat@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);