// inside this weakSet symbol.itaretor not exist
// becouse it is not itareble
const ws = new WeakSet([]);  // always must be placeed arry of object
// Object always must be placed in weakSet
ws.add({name:"jon",age:20})
ws.add({name:"motu",age:30})

console.log(ws)

class myClass {
    constructor(){

    }
    method (){
        return "this is a method"
    }
}
// old way 
const a = new myClass();
console.log(a.method());

// easyer wey to call
console.log(myClass.prototype.method());


// empliment weakSet in class
const ws1 = new WeakSet();
class wsClass {
    constructor(){
        ws1.add(this)
    }
    method () {
        if(!ws1.has(this)){
            throw new Error("you cannot access this method direcly! ")
        }else{
            return "this is a mthod this is working"
        }
    }
}
// আপনি যদি চান new method কে force fuly করাতে তাহলে এইভাবে ক্লাস 
// তৈরি করতে হবে। 
const x = new wsClass();
console.log(x.method());