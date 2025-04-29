const mitingHas = false;

let promise1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(!mitingHas){
           const metingDetails = {
            name: "technical meeting",
            location: "haydrabad",
            time: "10:20 PM"
           }
           res(metingDetails);
        }else{
            rej("metting alrady scheduled");
        }
    },500)
})

const addToCalander = (metingDetails)=>{
       const calander = `${metingDetails.name} has been scheduled on ${metingDetails.location} at ${metingDetails.time}`;
        return Promise.resolve(calander);  // উপরের তথ্য গুলোকে এখানে এনে রাখা হয়েছে 
}



promise1
    .then(addToCalander)
     .then((res)=>{
        console.log(JSON.stringify(res));
     })
     .catch((error)=>{
        console.log(error)
     })


console.log("hello this is frist task");

/// create new promise 
const promise3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("resposne promise 3");
    },1000)
})

const promise4 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("resposne promise 4");
    },2000)
})

// promise3.then((res)=> console.log(res));
// promise4.then((res)=>console.log(res));



// দুই promise ke aksathe dekhate hole 
// আরো একটা মেথড আছে Promise.race() eta te যেটা আগে কল হব resolve hobe duitar maje 
// protizogita hbe ze age ase be sarver theke take show korbe onnoke show korbe na সে সুধু সেটাকেই কল করবে 
// অন্যটাকে কল করবেই না । 
// আমাদের যদি মনে হয় সবগুলা রেজাল্ট একসাথে দেখাবো তাহলে Promise.all() ব্যবহার করতে হবে । 




// Promise.all([promise3,promise4])
//    .then(res =>{
//       console.log(res);
//    });
Promise.race([promise3,promise4])
   .then(res =>{
      console.log(res);
   });