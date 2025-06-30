// you can contact a function and call it whenever you need it 
// its a reusable block of code used to perform specific tasks
// it takes in an input and returns an output
// parameters values passed into functions - its like placeholders waiting for values
// then the values you feed in the parameter is the argument. So if the function is doctor
// it will already have parameters eg temperature, heart rate then the argument is the real actual value like 90 degrees

//declaration function 
// function add(a,b) {return a+b;}
// function functionName(){code goes here}
// then to call it you just write functionName() - it can be add subtract etc
// when you see a word with parenthesis it is a function
// log() this is a function which logs things on the console and what you type in the parenthesis is the argument - what that function should use
 
function addTwoNumbers () {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2
    console.log(sum) //why is the console log there? addTwoNumbers does not mean logging its just calling the function to do what it is supposed to do. Logging is what shows it on the screen of a terminal
}
addTwoNumbers();

// if you dont want to use console log but console is the best
function squareNumber (number) {
    return number * number;
}
console.log(squareNumber (70)); // when building project you will not need console.log because you're not building it to wshow in terminal 
console.log(squareNumber (80));
console.log(squareNumber (20));
// return keeps it in memory - then how you use it is up to you - you can display it on a screen, push it to a database etc.

//expression function 
// const subtract = function (a,b) {return a-b;}

//anonymous function
//setTimeout(function) {console.log("This is an anonymous function");} 1000);

//arrow function - this is  a shorthand where you don't use the word function
//const multiply = (a,b) => a*b;
//const subtract = (a,b) => a-b;

