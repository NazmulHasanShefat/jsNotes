//find window height or you can use window.innerWeidth
let container = document.querySelector(".container")
let windowHeight = window.innerWidth;
console.log(windowHeight);

container.children[0].addEventListener("click",()=>{
    window.open();  //create a new window 
})
container.children[1].addEventListener("click",()=>{
    window.close();
})
container.children[2].addEventListener("click",()=>{window.moveTo()})
container.children[3].addEventListener("click",()=>{let x = window.resizeTo(); console.log(x)})
container.children[4].addEventListener("click",()=>{
    let x = window.screen; console.log(x);
    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let screenAvailW = screen.availWidth;
    let colordepth = screen.colorDepth;
    let pixeldepth = screen.pixelDepth;
    console.log("your computer screen width is: " + screenWidth);
    console.log("your computer screen height is: " + screenHeight);
    console.log("your monitor screenHeight abilabe is: " +  screenAvailW);
    console.log("your computer color depth is : "+colordepth);
    console.log("This conputer pixel depth is:"+ pixeldepth);
})