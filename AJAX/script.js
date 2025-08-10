let demo = document.querySelector(".demo");

function loadData(){
    // create xml http request 
    const Xhr = new XMLHttpRequest();

    Xhr.onload = function(){
        demo.innerHTML = this.responseText;
    } 
    Xhr.open("GET","https://dummyjson.com/posts");
    Xhr.send();
}