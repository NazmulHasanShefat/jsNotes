// Here is a common workaround: Find the child you want to remove, and use its 
// parentNode property to find the parent:

const child = document.getElementById("p1");
child.parentNode.removeChild(child); //Here is a common workaround: Find the child you want 
// to remove, and use its parentNode property to find the parent:

// replace a html emements
parent.replaceChild(para, child);

// Change the text color of all <p> elements:

const myCollection = document.getElementsByTagName("p");
for (let i = 0; i < myCollection.length; i++) {
  myCollection[i].style.color = "red";
}

// html collection look like array but it is not a array
//you cannot use array method like valueOf() , pop() , push() , or join() on html

const mywindow = {
    name: "browser",
    functions: function(){
        console.log("hello");
    }
}