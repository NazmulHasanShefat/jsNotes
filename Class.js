class car{
    constructor(Name,price){
        this.CarName = Name;
        this.Carprice = price;
    }
    // adding a method 
    run(speed){
        console.log(this.CarName + " is running " + speed )
    }
}
const car1 = new car("Suzuki",5000)

console.log(car1)

car1.run("200km km/h");

// class static method  babohar kora hoy apnar zodi kono এমন ফাংশন দরকার হয় যে ফাংশন এই জন্য 
// object toiri na kore o objec ব্যবহার করতে static method ব্যবহার করা হয়ে যেমন 

class Car2 {
    constructor(name,age){
        this.fname = name
        this.fage = age;
    }
   static fullname(x){
       return  x.fname + " age is :  " + x.fage;
    }
}

const mycar2 = new Car2("forchunar",30);

console.log(Car2.fullname(mycar2));