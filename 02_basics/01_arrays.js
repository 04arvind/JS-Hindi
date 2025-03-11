// arrays : 

const myArr = [0, 1 , 2, 3 , 4 , 5];
// console.log(myArr[7]); // 
// console.log(myArr[3]);

// const  myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2[3]);

// arrray methods : 
// myArr.push(6); myArr.push(7); console.log(myArr);
// myArr.pop(); console.log(myArr);

// myArr.unshift(0); console.log(myArr);  // insert at start and it shifted all previous elements by one to right hand side.
// myArr.shift(); console.log(myArr);    // similar as pop but at start.

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(3)); // 3

// const newArr = myArr.join();
// console.log(myArr)
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice 
console.log("A",myArr);
const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(myn2);
