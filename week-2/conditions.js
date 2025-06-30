// // conditions use the word if and iterations use the word for 

// /* if
// if else
// if else if else
// switch for menus
// ternary operator - only use it if the logic is so small and you want to save time

// */ //check and do 
// if (condition) {
//     // this part of the code runs if the condition is truthy ie there are no red flags the program is going to raise
// };

// // do this or that
// if (condition) {
//     //this part of code runs if truthy 
// } else {
//     // this part of code runs if falsy
// };

// // lots of choices
// if (condition) {
//     //this part of code runs if truthy 
// } else if (condition) {
//     //this runs if condition 2 is truthy 
// } else { // if anything else is falsy

// };

// //switch
// //for menus
// switch (expression) {
//     case value1:
//         //code block
//         break;
//     case value2:
//         //code block
//         break;
//     default:
//     // code block
// };

// //ternary operator - only use if mastered 
// condition ? expressionIfTrue : expressionIfFalse;

//if examples - we have to use comparison operators cc operators.js
let number = 3;
if (number > 0) {
    console.log(number + " " + "is a positive number");
};

let isRaining = true
if (isRaining) { // since its boolean you dont need a greater than less than
    console.log("It is definitely raining, get your raincoat")
};

let age = 16;
if (age >= 18 && age <= 30) {
    console.log("You are eligible to request for a chick")
}
else { console.log("you're not eligible") };

let age1 = 20;
if (age1 >= 18 && age1 <= 30) {
    console.log("You are eligible to request for a chick")
}
else { console.log("you're not eligible") };

let age3 = 30;
if (age3 >= 18) {
    console.log("adult")
};

let mark = 70;

if (mark >= 90) {
    console.log("you got an A");
}
else if (mark >= 80 && mark <= 89) {
    console.log("you got a B");
}
else if (mark >= 70 && mark <= 79) {
    console.log("you got a C");
}
else if (mark >= 60 && mark <= 69) {
    console.log("You got a D")
}

let number1 = prompt(`enter number:`); //prompt is in the browser so it's not console.log it's alert
// they do the same thing console.log shows it in console and alert shows it in browser 

if (number1 > 0) {
    alert(`${number1} is positive`);
    console.log(`${number1} is positive`);

}
else if (number1 < 0) {
    console.log(`${number1} is negative`);
    alert(`${number1} is negative`)
}
else {
    console.log(`the number is zero`)
    alert(`the number is zero`)
};

// so for the prompt and the alert you put it in an
// html file and run it in the browser
//it won't show in the console log because it's
// a prompt 

// let quanity = prompt(`enter quantity`);

// if (quantity >= 100 && quantity <= 500) {
//     alert(`you are accepted`)
// }
// else {
//     alert(`invalid quantity`)
// }; 

//switch operator - how we test for 4 things
// let number2 = prompt(`enter number`);

// switch (true) {
//     case number2 > 0:
//         alert(`number is positive`);
//         break;

//     case number2 == 0: //when using comparison operators use 2 o 3 equal signs 
//         alert(`number is zero`);
//         break;

//     case number2 < 0:
//         alert(`number is negative`);
//         break;

//     default: // this is like else
//         alert(`number is invalid`);


// };


// we are testing whether it is true or false
//hence why we put true in the switch
//we are saying we want you to go case by case
//looking for truth
//break means stop there if you have got what you are looking for

// let dayInput = prompt("what day is it");
// let day = dayInput.toLowerCase(); //this sanitizes all incoming data to make it lowercase so it matches 

// switch (day) {
//     case "monday":
//         alert(`today is monday`);

//         break;

//     case "tuesday":
//         alert(`today is tuesday`);

//         break;

//     case "wednesday":
//         alert(`today is wednesday`);

//         break;

//     default: // this is like else
//         alert(`office is closed`);
// }

// when this wasn't working we changed alert into console.log
// and inspected it using the online console on the webpage
// then it told us what the error was and we went back to fix




