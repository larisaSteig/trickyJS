
//**************************** */ CALL APPLY BIND /********************************** */
//  document.querySelector("h1").textContent = colt.sayHi()
//  document.querySelector("h2").textContent = colt.sayHi.call(elie)

//  document.querySelector("h3").textContent = colt.addNumbers(1,2,3,4)
//  document.querySelector("h4").textContent = colt.addNumbers.call(elie,1,2,3,4)
//  document.querySelector("h5").textContent = colt.addNumbers.apply(elie,[1,2,3,4])


//**************************** */ BIND ///

// let elieCal = colt.addNumbers.bind(elie,1,2)
// document.querySelector("h1").textContent = elieCal(5,6)
//  document.querySelector("h2").textContent = colt.sayHi.call(elie)


const colt = {
  firstName :"Colt",
  sayHi: function () {
    return "Hi" + this.firstName
  },
  addNumbers: function(a,b,c,d){
    return this.firstName + "just typed" + (a+b+c+d)
  }
}

const elie = {
  firstName :"Elia"
};



//******************************constructor funciton


let Rusty = new Dog('rusty', '3')

  function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
      return this.name +"just barked at me"
    }
  }



// document.querySelector("h1").textContent = Rusty.bark()

//********************************* */ multiple Constructors
function Car(make, model, year){
  this.make= make;
  this.model = model;
  this.year = year;
  this.numberWheels = 4
}

function Motorcycle ( make, model, year){
  Car.call(this, make, model, year)
  this.numberWheels = 2
}

function Motorcycle ( make, model, year){
  Car.apply(this, arguments)
  this.numberWheels = 2
  return 'This motorcycle is ' + make + model + year
}


const blur = new Motorcycle('BMW', 'S325', '1999')
document.querySelector("h1").textContent = blur.Motorcycle()

