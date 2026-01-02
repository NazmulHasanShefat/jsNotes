let num = [1,2,3];
// array reduce method  array.reduce((previousValue ,currentValue, currentIndex, arry)=>{},initialValue)
const result = num.reduce((prevValue, currentValue)=>{
    return prevValue + currentValue;  // প্রথমে সে prevValue পাবে না তখন সে initial_value হিসাবে 0 পাবে 
},0) // যেটা array.reduce(callback,initialValue) method এর secend paramiter হিসবে দেওয়া হবে। 
// console.log(result)
const parson = {
    name: "ali",
    age: 20,
    collage: "hariana"
}

let str = "i love javaScript"
for(item of str){
   console.log(item);
}
let entris = Object.entries(parson);
let keys = Object.keys(parson);
let value = Object.values(parson);

console.log(value)


let negativeSlice = ["apple","mango","banana","kodma","borfi","anaya"];
let newpositive = negativeSlice.slice(4,6);
console.log(newpositive);
let newNagative = negativeSlice.slice(2,4);
console.log(newNagative);