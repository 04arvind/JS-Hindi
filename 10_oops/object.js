function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username,store){
    this.username = username;
    this.store = store;

}
createUser.prototype.increment = function(){
    this.store++;
}
createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.store}`)
}
const chai = new createUser("chai",25)
const tea = createUser("tea", 250)

chai.printMe()