class car2{
    constructor(Name){
        this.carName = Name; 
    }
    presentName(){
        return "i have a " + this.carName + " Car";
    }
}

class Model extends car2{
    constructor(Name,Model){
        // ei super methdo er maddhome er parent constructor ke niye asa hoise 
        super(Name);
        this.carName = Name;
        this.carModel = Model;
    }
    show(){
        return "mycar is " + this.presentName() + " this Model is: " + this.carModel; 
    }
}

const mynewCar = new Model("BMW","23DSL22");
console.log(mynewCar.show());


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cnam() {
      return this.carname;
    }
    
  }

  const mycar4 = new Car("pinkpantherdddd");
  console.log(mycar4.cnam);

  class Cycle {
    constructor(name,brand){
        this.name = name;
        this.Brand = brand;
    }
    static phonix(x){
        return "Welcome to new model: " + x.name + " " + x.Brand;
    }
  }

  const newCycle = new Cycle("X0001PNX","phonix");

  console.log(Cycle.phonix(newCycle));