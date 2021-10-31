/*
    Thomas Le
*/

//Handle add to list button
var addbutton = document.getElementById("button");
addbutton.addEventListener("click", displayTable);

//Handle reset list button
var resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", resetTable);

//Table indexing
var row = 1;
var totalCalories = 0;

function displayTable() {
    //Retrieve user inputs
    var foodName = document.getElementById("foodlabel").value;
    var servingAmount = document.getElementById("servinglabel").value;
    var calorieAmount = document.getElementById("calorielabel").value * servingAmount; 

    //Edit total calorie amount on screen
    totalCalories += calorieAmount;
    document.getElementById('total').innerHTML = "&nbsp TOTAL CALORIES: " + totalCalories;

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
    
    document.getElementById("foodlabel").value = "";
    document.getElementById("calorielabel").value = "";
    document.getElementById("servinglabel").value = "";
    document.getElementById("proteinlabel").value = "";
    document.getElementById("carblabel").value = "";
    document.getElementById("fatslabel").value = "";

    row++;
}

function resetTable() {
    row = 1;
    totalCalories = 0;
    document.getElementById('total').innerHTML = "&nbsp TOTAL CALORIES: " + totalCalories;
    var temp = document.getElementById("maintable");
    while (temp.rows.length > 1) {
        temp.deleteRow(1);
      }

    document.getElementById("foodlabel").value = "";
    document.getElementById("calorielabel").value = "";
    document.getElementById("servinglabel").value = "";
    document.getElementById("proteinlabel").value = "";
    document.getElementById("carblabel").value = "";
    document.getElementById("fatslabel").value = "";
}