//declare all your consts here an eventually you will cut them and put them in event listener for form and function for table


// Number(); //this turns everything the user has given us into a number because they will be typing a string
//then when you put all these in the parenthesis of number

//we are going to need an event listener for the form and a function to generate a table

// form handling
const form = document.getElementById('requestForm') //.value captures what the user has types  

form.addEventListener('submit', function (event) { //listens for a submit, captures what you're submitting, evokes add to table function then shows what was submitted
    // all the javascript
    event.preventDefault(); // prevents automatic submission
    const name = document.getElementById('farmerName').value.trim(); // trim removes white spaces
    const age = Number(document.getElementById('age').value);
    const quantity = Number(document.getElementById('quantity').value);
    const type = document.getElementById('typeOfChick').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = " "; //our para has something but it is empty 

    //validation (if form is empty it shoudnt submit, so there are required fields), verification(making sure login details are valid) and sanitisation(making sure hackers don't mess up your form)
    if (!name || !quantity) {// || means or ! means empty 
        errorMsg.textContent = "Please fill out all fields"
        return; // sometimes the if loops so close it with a return 
    };

    if (age < 20 || age > 30) {
        errorMsg.textContent = "Age must be between 20 and 30" // you can also put you have X years left 
        return;
    }

    if (quantity < 100 || quantity > 500) {
        errorMsg.textContent = "Quantity must be between 100 and 500"
        return;
    }
    // all forms have to be verified, validated and sanitized or even encrypted if it is a password - sanitization is back end
    addToTable(name, age, type, quantity);
    form.reset();
});


//table handling - all by a function which can just be add to table
function addToTable(name, age, type, quanity) { //function pushes this info to the table
    // all the javascript
    const table = document.getElementById('requestTable').getElementsByTagName('tbody')[0]; // 0 because we want it to appear on first row
    let row = table.insertRow(); // this is an equivalent of tr - can only be done after user has submitted, so as you submit it becomes bigger
    let cell1 = row.insertCell(0); // forms are arrays but tables are NOT arrays. You put in a number in the same way as forms but it's not an array of many forms so no square brackets 
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContext = name; // in real life these should be coming from the form that asks for name age and gender then when the person submits it adds a new row and captures the values
    cell2.textContext = age;
    cell3.textContext = type;
    cell4.textContext = quanity;

};
//all forms will need an event listener
// all tables will need a function 


