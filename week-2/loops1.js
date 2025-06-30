// // a loop or an iteration is a reptetition 
// // for loop, while loop and do while loop 

// // for loop - if you know the exact numbr of times
// /* you want to repeat a task
// if not use the while 
// if you want your loop to run at least once before it checks 
// conditions use do while, do it at least once then 
// ask questions later
// */

// for(initialisation,condition,increment/decrement) { // initialisation is declaring a variable, condition is comparing operators, then increment or decrement
// //code goes here 
// };

// declare variable here before while i.e initalisation "let x = 6" for eg
while(condition) {
// code goes here
// increment or decrement
};

// //initialistion
// do {
// // code goes here
// //increment/decrement
// }
// while(condition);
// // what is in curly brackets is what runs,
// //  what is in parenthesis is something to do with condition 

let x=0; 
x<6; 
x++;
for (let x=0; x<6; x++){
    console.log(x) // we are aiming to put a loop that will write from 0-5, so it will ask the question is 0<6, yes? loop and that repeats
}

// times table 

// let x=1; 
// x>=12; 
// x++;

//learn how to code a multiplication table 

let y=0 // initialisation means where do you want to start from 
while(y<=5){
    console.log(y)
    y++
}; // same thing 0-5 just need to know when to use which
// while is for when there is no set number of how many times to loop

// initialisation, condition, iteration

let password;
const correctPassword = "Kimuli123"; //all passwords are strings 

while(password !== correctPassword)//!== means not exactly equal to 
 {
   password = prompt("enter your password"); // the prompt comes because what you declared is already true so it says enter password then it checks again every time you type 
   // you use if statements to then say - your pw is incorrect
}
alert("access granted")

// when the condition in the while loop is false thten we run the execution in the curly brackets

let z=0
do{
    console.log(z);
    z++
}
while(z<=5);

//ASSIGNMENT:


