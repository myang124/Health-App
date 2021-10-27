/*
    Thomas Le
*/

//Retrieve button and table
var button = document.getElementById("button");
button.addEventListener("click", displayTable);

//Table indexing
var row = 1;

function displayTable() {
    //Retrieve user inputs
    var foodName = document.getElementById("foodlabel").value;
    var servingAmount = document.getElementById("servinglabel").value;
    var calorieAmount = document.getElementById("calorielabel").value * servingAmount; 

    //If any required box is empty, alert message will appear.
    if(!foodName || !calorieAmount || !servingAmount) {
        alert("Please fill out the required boxes.");
        return;
    }

    //Retrieve main table for edit
    var table = document.getElementById("maintable");
    var newRow = table.insertRow(row);

    //Insert food name, servings, calories into a row
    var temp0 = newRow.insertCell(0);
    var temp1 = newRow.insertCell(1);
    var temp2 = newRow.insertCell(2);

    //Add the row we just made into a new column on the table
    temp0.innerHTML = foodName;
    temp1.innerHTML = servingAmount;
    temp2.innerHTML = calorieAmount;
    
    row++;
}