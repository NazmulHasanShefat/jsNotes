const letters = new Set(["a","a","b","c","c"]);
let demos = document.querySelectorAll(".demo");
let text = "";
console.log(letters.values());

let itaretor = letters.values();
for(let x of itaretor){
    demos[0].innerHTML =  text = text + "  " + x ;
}
