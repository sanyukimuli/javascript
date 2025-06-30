// in real life objects are things like houses cars people animals etc
// object properties methods car.name = fiat car.start() = method 

//method show that this function is attached to an object 
//car.start() is a method car.drive()

// //properties car.name = Fiat, car.model = 500. properties are just characteristics of that object whereas methods are functional 

// // when writing js for html, where there is the car oject you put document (js looks at html and css as a documents) 
// // so you'd say document.X document.Y() 

// // let car = {} // an empty car object - one car with different properties and functions
// // let listOfCars = [] // that's how you make an array, a list of diff cars 

// // 
// // these are all properties of the car
// // if all these thigns are about one car the beset thing is to turn them into an object

// let car = {
//     carName: "fiat",
//     carModel: "punto",
//     carWeight: 800,
//     color: "blue"
// };

// console.log(car);



// function carStart() {  // another way of writing this is let carStart = function and then same thing 
//     console.log("vroooooom")
// };

// function carBreak() {
//     console.log("screeeech")
// };

// function carStop() {
//     console.log("car has stopped")
// };

// function carDrive() {
//     console.log("drive")
// };

// console.log(car);

// // how you access objects
// car.carName ;
// car.carModel;
// car.carWeight;
// car.color ;

// // how you access methods
// car.carBreak();
// car.carStart();
// car.carStop();
// car.carDrive();

// these are coming from let name = let age = etc. but for objects you remove let and = sign 
let farmer = {
    name : "John",
    age : 25,
    isRegistered : true,
    greetFarmer : function(){
        console.log("welcome" + " " + this.name) // you have to put this to refer to the current object
    },
    chickRequest : function(quantity) {
    console.log(this.name + "requested for" + " " + quantity + " " + "chicks")
}
};


// this is all coming from one object 

console.log(farmer.age);
farmer.greetFarmer(); //how do we greet the farmer 
farmer.chickRequest(100); //how do we request for 100 chicks

let girl = {
    name : "Sanyu",
    age : 25,
    isMale : false,
    greetMember(){
        console.log("hi" + " " + this.name)
    },
    sayAge : function(number) {
        console.log(this.name + " " + "is" + " " + number)},
};

console.log(girl.name);
console.log(girl.age);
girl.greetMember();
girl.sayAge(25);
console.log(girl.isMale);

//objects store different values about one variable - the data of each object is grouped together 
// whereas arrays store the same info about multiple variabeles. So like const cars["fiat", "volvo"] then you can pick out one car
const person = {
    name: "John" ,
    age: 20,
    child: {},
    courses : ["javascript", "python", "C++"]
};
//for arrays we use the index to return values
console.log(person.courses[1]) // we use index 1 to access python because it goes 0, 1, 2
console.log(person.courses[0])

// for objects we use the dot notation to return values 

// an array holds any random values, when you have group data like in this person example and there's data related to them like name
// age address role etc. you use an object when you want to keep replicating similar data - like if there are loads of people 
// an array is just used to hold multiple values - like you can't have a person array with a name age etc. so it doesn't specify
// an object becomes a template - so when i create a form to register students in the object above, I can use an object to replicate that 
// object is same keys (name, age, courses) different values - this creates structured data
// arrays dont have keys to mark which data is what 
