const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currva : ${currval}`);
//     return acc + currval
// },0)
// console.log(myTotal)


const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)