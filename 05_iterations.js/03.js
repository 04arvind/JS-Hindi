// for of 

// ["","",""]
// [{},{},{}]


// const arr = [ 1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }

        // Maps : 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('IN',"India")
console.log(map);

// for(const key of map){
for(const [key, value] of map){
    console.log(key, ':-', value);
}

// const myObject = {
//     'game1':"NFS",
//     'game2':"Spiderman"
// }
// for(const [key, value] of myObject){   object is not iterable in forof
//     console.log(key, ":-",value)
// }