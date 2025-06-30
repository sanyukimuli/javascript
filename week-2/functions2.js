function greetFarmer () {
    console.log("Hello, welcome to young4Chick platform");
}

// greetFarmer(); // we have console.log so don't need to put return 

function submitRequest () {
    console.log("Your chick request has been submitted");
    alert("Your chick request has been submitted");
}

// submitRequest(); 

function calculateTotalCost(quantity, pricePerChick) {
    return quantity*pricePerChick
}

calculateTotalCost(100, 1650);
calculateTotalCost(70,1650);
calculateTotalCost(30,1650);

let total = calculateTotalCost(100,1650);
console.log(total); 

let greetFarmers= (farmerName) => console.log("Hello" + " " + farmerName + " " + "welcome to young4Chick platform");
// let greetFarmers= function(farmerName) { console.log("Hello" + " " + farmerName + " " + "welcome to young4Chick platform")};


 greetFarmers("Sanyu");
 greetFarmers("John");
 greetFarmers("Peter");
 greetFarmers("Jane");

function processTheMoney(callback){
    callback()
}
 processTheMoney(function(){
console.log("colleagues, the money is coming")
 });

 function school(career) {
    return function() {
        console.log("Hello" + " " + career + " " + "welcome to young4Chick platform");
    }
}

let createDoctor = school("doctor");
createDoctor();

let createLawyer= school("lawyer"); 
createLawyer();

//






 
