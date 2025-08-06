let message = document.querySelector("#worker_massage");
let w;

function createWorder(){
    if(typeof Worker !== "undefined"){
        // worker abilable

        // if w worker is not defined 
        if(typeof w == "undefined"){
            w = new Worker("Worker.js");
        }
    

        // listening for Worker event massage 
        w.onmessage = function(event){
            message.innerHTML = event.data;
        }


    }else{
        alert("your browser dosen't sapport Worker");
    }
}