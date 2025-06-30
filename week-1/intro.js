
// convert all variables into let
// then const x = for things that dont change
// if its a sentence you put it in quotes, number dont need 
// do not forget semi colons
// names have to be in quotes


let isApproved = false; // boolean approval status - may need to create a html dropdown which changes is approved to true or false

// farmer info - if you don't turn it into data types you cant program it

console.log(typeof "Jane")

//Chick Request

const chickPrice = 1650; // number - its irresepctive of type so it remains a const

// non primitive data types 

// array - has to have similar data types about same theme 

let chickTypes = ["broiler", "layer", "exotic", "local"] // this is all the same datatype (strings) and all chicks so you use arrays 

// object - different data types - all farmer information but differnt themes 
let farmer = {
     isRegistered : false,
     name : "Jane", // a name is a string it has to be in quotes
     age : 25
}

console.log(chickTypes);
console.log(farmer)

//array 2
let farmerName = ["Oscar", "Sanyu", "Louise"]; // data type is the same they're all words and strings

//object 2 
let chickStock = {
    type : "layer",// layer has to be in quotes because its a string 
    quantity : 800,
    age : 8 
}

// array 3
let numbers = [1,2,3] // data type is the same they're all numbers
// 1 is at index 0, 2 is at index 1, 3 is at index 2
// that is how you pull out an item from an array/object. Like above if you want Oscar you put the index number as 0
// you catch it by its reference not its value 

