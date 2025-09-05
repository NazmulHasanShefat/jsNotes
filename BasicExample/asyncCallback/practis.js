let marks = 80;
let payment = true;

function enroll(callback){
    console.log("enrollment is prosesing....");
    setTimeout(() => {
        if(payment){
            callback();
        }
        else{
            console.log("payment is faild try agine !")
        }
    }, 2000);
}
function progerss(callback){
    console.log("lerning is progressing ...");
    setTimeout(() => {
        if(marks >= 80){
            callback()
        }
        else{
            console.log("your mark is less then 80 you can't got certificate !");
        }
    }, 2000);
}

function getCretificate(){
    console.log("preparing you certificate plase watt...");
    setTimeout(() => {
        console.log("Congratulation you have done this challing course good job")
    }, 2000);
}

enroll(()=>{
    progerss(()=>{
        getCretificate();
    })
})