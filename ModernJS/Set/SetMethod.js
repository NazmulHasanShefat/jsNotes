// create a unicarray use Set() method
const arr = [1,2,3,3,3,4]
let unic_array = new Set(arr);  // convert this array in set
// created  a unic array

// এই দুইটা object যদি একটা var এর মধ্যে থাকে
// আর সেটাকে যদি বার বার add করা হয় তাহলে সেটা ইউনিক হবে। 

unic_array.add({
    naem: "jon",
    age: 20
})
unic_array.add({
    name: "jon",
    age: 20
})


console.log([...unic_array])  //consvert this set in array
console.log(Array.from(unic_array))  //consvert this set in array

const set1 = new Set([1,2,3,4])
const set2 = new Set([3,4,5,6])

// set union or concat 2 set
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet);

// intersection মানে দুইটার সাথে যা যা কমন আছে 
const interSection = new Set([...set1].filter(myset1 => set2.has(myset1)))
console.log(interSection);

// set defference
const deff = new Set([...set1].filter(deffSet1 => !set2.has(deffSet1)))
console.log(deff)