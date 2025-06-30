// when readin through a project you need to know which oeprator to use
// eg a farmer can only request for less than 500 chicks and has to be reg
// so you use comaprison operator and logic 


// assignment operator is "="//
let firstName="Sanyu";
// x=y;
// x = x+y;
// x+=y ; // line 4 and y are the same - they dont wanna write x twice //
// total = total + 20;
// total += 20;

// x=x-y 
// x-=y 

//arithmetic  +-*/%
const pricePerChick = 1650; // constant price of a chick
let numberOfChicks = 100; // the amount of chicks there

totalPrice = pricePerChick*numberOfChicks;

console.log(totalPrice);

// remainder operator %


// comparison operators (for boolean)
// less than or equal to, between 20 and 30 etc...
// project says unless a farmer is between age 20 - 30 
// >= <= =! 3rd one is not equal to
// == loose equal to - comparing 2 objects
// === strict equal to - comparing something and its data type 


// logic operators 
// and, or, not 
let a =5
let b = "5"
console.log(a===b) // is one a number and other a string ? then false
console.log(a==b) // loosely checked 
// so ALWAYS use 3 equal signs 
// if you want to compare two variables make sure they are strictly compared with 3 equals ===


// && and
// |or
// !not

// if (farmersAge >= 20 && <= 30) 
//     {
//   console.log("Eligible for chick request.");
// }


// concatenation
// the adding of words - used when writing messages to user or 
// when you open a browser and it knows your name 

let farmerName = "Sanyu";
let chickType = "broiler";

console.log("Good morning" + " " + farmerName, "you requested for" + " " + chickType);




