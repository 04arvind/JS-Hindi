 // Dates : 
/*
 let myDate = new Date();
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toISOString);
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);

//  let myCreatedDate = new Date(2025,0,23); //  months started with 0 in JS
//  let myCreatedDate = new Date("2025-03-14"); // in this months started with 1 in JS
 let myCreatedDate = new Date("03-14-2025"); // in this months started with 1 in JS
 console.log(myCreatedDate);
 console.log(myCreatedDate.toLocaleString());
 console.log(myCreatedDate.toDateString());
 */

 
 /*let myTimeStamp = Date.now();
 let myCreatedDate = new Date("01-14-2025");
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));
*/

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday: "long",
    
})