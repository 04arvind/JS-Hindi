/*
let score = 33
// let score = "33abc"
// let score = null;
// let score = undefined;
// let score = true;

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// 1 => true ; 0 => false
// "" =>false;
// "Arvind" =>true;

*/

// ************************************* Operations *****************************************************
    //  let value = 3;
    //  let negValue = -value;
    //  console.log(negValue);

    //  console.log(46+2-6*7/2);

    //  let str1 = "Hello"; let str2 = "Rawat";
    //  let str3 = str1 + " " + str2;
    //  console.log(str3);

    //  console.log("1"+2);
    //  console.log(1+"2");
    //  console.log("1"+2+2);
    //  console.log(1+2+"2");

    // console.log(true);
    // console.log(+true);
    // // console.log(true+);
    // console.log(+"");

    // let num1 , num2, num3
    // num1 = num2 = num3 = 2+2;           // dont do this because it reduce code readiablity.

    // let gameCounter = 100;
    // gameCounter++;
    // console.log(gameCounter);

    // console.log(2>1);
    // console.log(2<1);
    // console.log(2>=1); 
    // console.log(2<=1);
    // console.log(2==1);
    // console.log(2!=1);
    // console.log(2==="2");
    // console.log(2=="2");
    // console.log(2!==1);
    // console.log("02">1);

    // console.log(null>0)
    // console.log(null<0)
    // console.log(null>=0)
    // console.log(null<=0)
    // console.log(null==0)

    //    === => strict equality
    
 //********************************** Data type summray ****************************** */
     // Symbole : 
    const id = Symbol('123');
    const anotherId = Symbol('123');
    console.log(id===anotherId);
    
    const bigNumber = 4645965313116346456646n;
    console.log(bigNumber);

    const heroes  = ["Shaktiman", "Nagraj", "Doga"]
    let myObj = {
        name: "Arvind",
        age:22,
    }

    const myFunction= function(){
        console.log("Hello world");
    }

    console.log(typeof bigNumber);
    console.log(typeof myFunction);
    console.log(typeof heroes);


    // https://262.ecma-international.org/5.1/#sec-11.4.3
    