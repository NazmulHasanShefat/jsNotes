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