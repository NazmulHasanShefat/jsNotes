let mark = 80;
let paymentSuccess = true;

function enroll(callback){
    console.log("course enrollment is progress...");
    setTimeout(()=>{
        if(paymentSuccess){
            callback();
        }
        else{
            console.log("payment faild try agine ! ")
        }
    },2000)
}

function progress(callback){
    console.log("couse is progress");
    setTimeout(()=>{
        if(mark>=80){
            callback();
        }
        else(
            console.log("you mark not to good enugth")
        )
    },3000)
}

function getCertificate(){
    console.log("prepareing your certificate");
    setTimeout(()=>{
        console.log("congratulator you get the certificate");
    },1000)
}
enroll(()=>{
    progress(()=>{
        getCertificate()
    })
});
