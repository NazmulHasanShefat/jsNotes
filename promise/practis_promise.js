let payment = true;
let mark = 80;
function enroll(){
    console.log("enrollment is prosesaing ....")
    const promise = new Promise((res,reject)=>{
          setTimeout(() => {
            if(payment){
                res();
            }
            else{
                reject("payment faild");
            }
          }, 2000);
    })
    return promise;
}
function progress(){
    console.log("your lern in progress...");
    const promise = new Promise((res,rej)=>{
        setTimeout(()=>{
            if(mark >= 80){
                res();
            }
            else{
                rej("your mark is less then 80 you can'n got certificate");
            }
        },2000)
    })
    return promise;
}

function getCertificate(){
    console.log("prepare your certificate ....")
    const promise = new Promise((res)=>{
        setTimeout(()=>{
            res("you got this certificate download now");
        },2000)
    })
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value)=>{
        console.log(value);
    })
    
    .catch((err)=>{
        console.log(err);
    })