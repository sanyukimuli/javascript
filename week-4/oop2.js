
    // a special method inside of class - runs automatically when class called - a function 
    // define properties of class in constructor - all classes have to have a constructor 
    //then specify how properties are called
    // this.name - for this specific object set a property name with this value
    // we can then add methods l20
    // your form has defined fields and these will be the same ones you define in the class of your student which is in your backend - so when you submit you have methods that create this student in your database - then in your backend you're saying for this specific , student set the name as firstName (which will be an actual name) - then an object is created and that object is put in database
    // name on your input has to match property you put in class - so needs to have input name firstName, input for age has to have a property where name is years 
    // <input id="firstName" name="firstName" class="firstName"> (inside form) - when you put data in and submit this is what is attached
    // node (server which processes and saves data) looks out for the name property - in this obj that is creating a student do I have first name? Yes. So use the class to create an object with the data given for a specific student
    class Student{
    constructor(name, age, course, address, number){  
        this.name = name;
        this.age = age;
        this.course = course;
        this.address = address;
        this.number = number;

    } 
    learn(){
        console.log(`My name is ${this.name}. I am studying ${this.course}.`);
    
    }
}
// then create object 
// const variable = new Class(specific arguments) & console.log(variable) to return the object 
// and list specific arguments in the correct order (order listed in constructor) so they assign accurately 
const mary = new Student("Mary Jane", 28, "javascript", "refactory", 7512345678);
console.log(mary);

const john = new Student("John", 14, "python", "refactory", 7897654321);
console.log(john);
console.log(john.learn()); // we are calling "learn" on john - methods in classes can be called on the object. "learn" = custom method
// returns My name is John. I am studying python.

// returns 
// Student {
//   name: 'Mary Jane',   
//   age: 28,
//   course: 'javascript',
//   address: 'refactory',
//   number: 7512345678   
// }

// inheritance is between class and class - taking on the properties from another class 
//eg class of car with 4 tyres steering etc. Then another class BMW will inherit all those properties but also have its own that are unique to BMW. Whereas an object is just created from a class 

// create a new class called Scholarship and use extends to show it's inheriting the properties of class called Student 
// then every class has constructor

//Student is the parent class and Scholarship is the child class
// super calls constructor of the parent class so that properties there are called in the child class for them to run 

class Scholarship extends Student{
    constructor(name, age, course, address, number, amount, sponsor){
        super(name, age, course, address, number);
        this.amount = amount;
        this.sponsor = sponsor;

    }
    scholarshipInfo(){
        return `${this.name} has a scholarship of UGX${this.amount} scholarship.`
    }
}

const scholar1 = new Scholarship("Alice", 22, "javascript", "kampala", 7483454355, 1000000, "mastercard foundation");
console.log(scholar1);