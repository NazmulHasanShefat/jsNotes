const Person = {
    fristName: "Emma",
    lastName: "Watson",
    fullName: function(){
        return this.fristName + " " + this.lastName;
    } // this is a method
}
const member = {
    fristName: "Black",
    lastName: "Wedoo"
}
let myFullname = Person.fullName.bind(member);
console.log(myFullname())


const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      return this.firstName + "," + this.lastName;
    }
  }
  
  console.log(person.display())
  