// We know that Object is not itareble because Object এর মধ্যে symble.itaretor নামক কোন method নাই।
// We know that Array is itareble because Array এর মধ্যে symble.itarator নামক একটা method আছে এটা javaScript এর build in property ba method 
// যার মাধ্যমে Array এর মধ্য দিয়ে itarate করা যায় । 

// so we make custom symble.itatator function 
// Object ke itareble বানানোর জন্য আমরা symble.itaretor এর মধ্যে itaretor function বানাবো। 
const myOBJ = {};
let myarr = [20,40,50,50]

// myOBJ এর মধ্যে একটা propertiy দিয়ে দিলাম symbol.iterator eta ekta function;
myOBJ[Symbol.iterator] = function () {
    let number = 0 ;
    let done = false;
    return {
        next(){
            // এই next() function করবে কি প্রতিটি step এ  number = 0 তার সাথে 10 যোগ করে দিবে । 
            number = number + 10;
            if(number == 100){done = true}; // number er value zodi 100 hoye zay tohole done er value = true kore dibe 
            return {
                value: number,
                done: done
            } // এবং রিটার্ন করবে এই object er value gula ke  এবং done variable er value যখন 100 হয়ে যাবে তখন done er value 
            // true হয়ে যাবে তখন লুপ শেষ করে দিবে । 
        }
    }
};

for(let n of myOBJ){
    console.log(n);
}

// symbol.iterator ekta function ei function ke coll korle ekta itetator pawa jabe ebong 
//tar prototype er moddhe ekta next name e ekta function thakbe

// javaScript zokhon Symbol.iterator coll kore dey tokhon ekota itetator pawa zay
// iterator er moddhe ekta next() function er implementation ase .  

console.dir(myarr[Symbol.iterator]())
let myItaretor = myarr[Symbol.iterator]();

// myiterator.next() function ke cool korbo tokhon ekta object pawa zabe 
// tar moddhe two kye value theakbe ekta value: value, done: false;
console.log(myItaretor.next())
//zokhon ei function ke abar coll korbo tokhon next arry pawa zabe অর্থাথ 40 পারবর্তি array pawa zabe
console.log(myItaretor.next())
console.log(myItaretor.next())
console.log(myItaretor.next())
// যতগুলো arry thakbe তত বার next function coll hobe zokhon done: true, done এর value true হলে ebong value er value undifind hobe
// তখন লুপ থেমে যাবে । 
console.log(myItaretor.next())

