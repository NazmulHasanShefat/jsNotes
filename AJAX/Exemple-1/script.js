// convert simple text JSON object use JSON.parse() method
let get = document.getElementById("getdata");
let send = document.getElementById("SendData");
let demo = document.getElementById("demo")

function sendRequest(method, url, data) {
    let mypromise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            //xhr.response or this.response there are same
            if(this.status >= 400){
                reject(`There is application error
                     Error type:${this.status}
                      Error Name: ${this.statusText}`)
            }else{
                resolve(this.response);
            }
        }
        xhr.onerror = function() {
            reject("there is an error");
        }

        xhr.open(method, url);
        xhr.responseType = "json";

        // when you want send data you use xhr.send(data) this data variable
        xhr.send(data)
    });
    return mypromise    ``
}
function getData() {
    sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(responseData => {
        console.log(responseData);
    })
    .catch(err =>{
        console.log(err);
    })
}

function SendData() {
    sendRequest("POST","https://jsonplaceholder.typicode.com/posts",
        JSON.stringify({
           title: 'foo',
           body: 'bar',
           userId: 1,
        })
    ).then(sendrequestData =>{
        console.log(sendrequestData);
    })
    .catch(err =>{// this can handle network related error not application error
        console.log(err)
    })
}

//function getData(){
//let xhr = new XMLHttpRequest(); // create XMLhttprequest

// use and display on show on console
// xhr.onload = function(){
// this mean variable xht
//let res = this.responseText;  // json text found by xhr request  this is our response

// when you want direct josn dont use (this.responseText) use this.response
//  let jsonRes = this.response;

//let con_Obj = JSON.parse(res); // converted json string - to object
// console.log(con_Obj);

// console.log(jsonRes);
//}

// xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1"); // open link

// when you want direct json use this
// xhr.responseType = "json"

//xhr.send();  // request send
//}


get.addEventListener("click", getData)
send.addEventListener("click", SendData)