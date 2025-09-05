function display(some){
    document.querySelector(".demo").innerHTML = some;
}

function calculator(a,b,callback){
    let clc = a + b
    callback ? callback(clc) : ""
}
calculator(20,30, display);