// function calculateCartPrice(...num1){
function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,500, 2000))

const user ={
    usernmae : "Arvind",
    prices : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usernmae} and price is ${anyobject.price}`)
}
// handleObject(user);
handleObject({
    usernmae:"Sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));