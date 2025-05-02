const mark = 80;
console.log("test 1 prosessing...")

const promise = new Promise((resolv,reject)=>{
    setTimeout(() => {
      if(mark>=80){
        resolv("this is resolv")
      }else{
        reject("rejected");
      }
    }, 2000);
})

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error)
    })

console.log("test 3 prosessing...")