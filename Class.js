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

car1.run("200km /h");