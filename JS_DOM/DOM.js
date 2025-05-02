let ptag1 = document.querySelector(".ptag1");
let btn_add_attr = document.querySelector(".btn-add-att");
let inputs = document.querySelector("#inputs");
let Attr_value = document.querySelector("#Attr_value");
btn_add_attr.addEventListener("click",()=>{
    ptag1.setAttribute(inputs.value, Attr_value.value);
    console.log(ptag1);
})

let container = document.querySelectorAll(".container");
let buttons = document.querySelectorAll("button");
// remove child elements 
buttons[1].addEventListener("click",()=>{
    let childs = document.querySelectorAll(".child");
    container[1].removeChild(childs[1]);
    // replace childs 
    let NewChild = document.createElement("h2");
    NewChild.innerHTML = "This is a new child";

    container[1].replaceChild(NewChild,childs[2]);
})

// get URI 
let newURI = document.baseURI;
console.log(newURI);
//get cookie
let newCookie = document.cookie;
console.log(newCookie);
//doctypes
let mydoctype = document.doctype;
console.log(mydoctype);
//find document moods
let mydoc_mood = document.documentMode ;
console.log(mydoc_mood);

let implant = document.implementation;
console.log(implant);


let lastmodifyed =  document.lastModified;
console.log(lastmodifyed);

















