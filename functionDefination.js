// এই ফাংশন যে একটা vaiable er মধ্যে রেখে কল করলাম এই ফুল প্রসেস ই হলো function expretion
let x = function (a, b) {
    return a * b;
  }
console.log(x(10,20))

// Without named function is a anonymous function 

// function hoisting 
// hoisting holo zoto declatetion ase sob gula ke upone tule dey tor por exicute hoy 
// একটা function ডিক্লেয়ার করার সেটা কে উপরে কল কারা যায় কারন function hoisting হয় 


// importent!!!!!!
//*** কিন্তু যদি function ke একটা variable এর মধ্যে store kore রাখেন তাহলে সেটা হইস্টিং হবে না । normal function hoisting hobe . 
// variable er modde funtion ke rekhe upore coll korle coll hobe na 


// self invoce function 
// (function () {
//     let x = "Hello!!";  // I will invoke myself
//   })();

function a(a,b){
    return a + b;
}
console.log(a.toString());
// ()=>{} arrow function er ক্ষেত্রে this kyeword ব্যবহার করা যাবে না । 
// তখান this কিওয়ার্ড global variable খুজবে । 

// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function () {
//     return this;
//   }
// }

// This will return [object Object] (the owner object)
// console.log(myObject.fullName());



// this is function apply() method 


// apply() method or call() method er পার্থর্ক হল apply() method er moddhe arguments arry হিসাবে দিতে হয় 
// কিন্তু call() method e arguments যেকোন ভাবে দেওয়া যায় । 

const personApply = {
  fullName1: function(city,age){
     return this.firstName1 + " " + this.lastName1 + " " + city + " " + age ;
  }
}
 
const person1 = {
  firstName1: "jone",
  lastName1: "due"
}

console.log(personApply.fullName1.apply(person1,["Natore",30]))





const personCall = {
  callFullName: function(distric,country){
    return this.c_fristName + "," + this.c_lastName + "" + distric + "," + country ;
  }
}
const c_person = {
  c_fristName: "ali",
  c_lastName: "akbor"
}

console.log(personCall.callFullName.call(c_person,"Bogura", "india"));