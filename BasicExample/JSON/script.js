let get_btn = document.querySelector("#getjson");
let send_btn = document.querySelector("#sendjson");

 async function getdata(){
    let response = await fetch("https://dummyjson.com/posts");
    let data = await response.json(); // this json() function this response data converted to valid js object
    console.log(data.posts);
    // console.log(response);
    let post = data.posts;
    post.map((e,index)=>{
        console.log(e.title)
    })
 }


get_btn.addEventListener("click",getdata);
// send_btn.addEventListener("click",senddata);