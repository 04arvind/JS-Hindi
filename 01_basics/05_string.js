const name = "Arvind"
const repoCount = 50
// console.log(name + repoCount + "value");  Dont use this syntax because its old syntax and in modern day no one use it.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('arvind-hc');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20arvind"
console.log(url.replace('%20','__'));

console.log(url.includes('arvind'));
console.log(url.includes('rawat'));

console.log(gameName.split('-'));
