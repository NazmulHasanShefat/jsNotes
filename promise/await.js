let marks = 80;
let payment = true;

function enroll(){
    console.log("enroll is progress...");
    const promise = new Promise((res , rej)=>{
       setTimeout(() => {
        if(payment){
            res();
        }
        else{
            rej("payment faild try agin !..");
        }
       }, 2000);
    })
    return promise;
}

function progress(){
    console.log("lerning is progressing ... ");
    const promise = new Promise((res,rej)=>{
        setTimeout(() => {
            marks >= 80 ? res() : rej("you mark less then 80 you can't got cretificate");
        }, 2000);
    })
    return promise;
}

function getCretificate(){
    console.log("prepair certificate");
    // const promise = new Promise((res)=>{
    //     setTimeout(() => {
    //         res("congratulation you got certificate download new")
    //     }, 2000);
    // })
    // return promise;
    return Promise.resolve("congrats you got certificate");
}

async function getresult(){
    try{
        await enroll();
        await progress();
        const massage = await getCretificate();
        console.log(massage);
    }
    catch(err){
     console.log(err);
    }
}
getresult();