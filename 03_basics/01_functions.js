function sayMyName (){
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("D");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4);  // addTwoNumbers(3,"4"); addTwoNumbers(3,"a");

function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
  }

const result = addTwoNumbers(3,5);
// console.log("Result :", result)


function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
    console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Arvind"));