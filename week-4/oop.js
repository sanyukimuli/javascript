// five ways creating obs - object oriented programmingyou

//object literals

const myObject = {
    property1 : "value 1",
    property : "value 2",
    method: function() {
        console.log(" hello from method 1")
    }
}
console.log(Object.getPrototypeOf(myObject))

//object.create
const animal = {
    sound : "bark",
    sound : "howl",
    makeSound : function(){
        console.log(this.sound)

    
    },
    makeSounds(){
        return `This is ${this.sound}`
    }
}

// ouses prototype so its more inherited 

const dog = Object.create(animal); // you create  a dog - it collecs the dnaa
dog.sound = "bark";
dog.makeSound();
console.log(dog);

//constructor function is third way of creating obj
//you use a cap if you ant your function to creat objects

function Person(name,age){
    this.name = name
    this.age = age //blueprint - whatever we pass in the constuctor will pass through where theres name and age 
    this.greet = function(){
        console.log(`hello my name is ${this.name}`) //constructor functions have new keyword 
        
    }
}
 const person1 = new Person("Sanyu", 25); // new Person is the same as object.create
 const person2 = new Person("Angelo", 25); // new Person is the same as object.create
 const person3 = new Person("Lou", 25); // new Person is the same as object.create
 const person4 = new Person("Carl", 25); // new Person is the same as object.create

 console.log(person1);
 person1.greet();

 //using es5 classes
 class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`${this.make} is starting`)
    }
 }
 const car1 = new Car("Range Rover", "Sport");
 const car2 = new Car("Fiat", "Punto");

// factory function (function that returns an object)
function createProduct(name, price){
    return{
        name : name,
        price : price,
        displayInfo: function(){
            console.log(`Product ${this.name}, Price ${this.price}`)
        }
    }
}

const product1 = createProduct("laptop", 893);
const product2 = createProduct("smartphone", 893);
product1.displayInfo(); // output product: laptop price: $90
 


//choose which method works

//encapsulation helps in data hiding 

//inheritance - allows one class to inherit properties and methods from another class 
// class is blueprint of what obj should look like e.g students should have name, number email etc.
// using class i can create an obj (incl students details) - using the blueprint i got from the class i can create a 
//student and save in database 
// then using same class I can create another student (a specific object) with diff info - a class defines what an object that will be created from it will have 

class Animal{
    constructor(name) {
    this.name = name;
    this.type = "Animal";
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(breed) { //super means we have done adjustments on one of your properties
    super(breed);
}
    speak(){
        console.log(`${this.name} barks.`)
    }
}

let police = new Dog("police");
police.speak(); // output: police barks. police got the ability to bark fom animal 

// same as object.create but they hide that you're using prototypes and constructors 

// polymorphism - different objects have classes with same name but act different 

// allows you to have the same login credentials for admin and user - like how on zoom a host has host rights AND user rights but a user has only user - all handled by one login function that gives two levels of accessibilty using the same login 
class User {
    login(){
        console.log("User logged in");
    }
};

class Admin extends User { // inherit everything the user does but do even more
    login(){
       console.log("User logged in with elevated priviliges"); 
    }
};

// then you use an if to say if this person is logged in as user then show xyz, if logged in as admin then blah 

let henry = new Admin();
    newAdmin.login();


// you can even leaave polymorphism and use an if statement

//abstraction 



































