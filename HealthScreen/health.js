/*
    Pranav Puritipati
*/

//Calendar stuff
const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();




//Log first visit onto page
var firstTime = sessionStorage.getItem("firsttime");

if(!firstTime) {
  //It is your first time on this page
  sessionStorage.setItem("firsttime", 1);
} else {
  //It is NOT your first time on this page
  sessionStorage.setItem("firsttime", 2);
}

//Handle add to list button
var addbutton = document.getElementById("button");
addbutton.addEventListener("click", displayTable);

//Handle reset list button
var resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", resetTable);

//Table indexing
var row = 1;
var totalCalories = 0;

//Retrieve main table for edit
var table = document.getElementById("maintable");

var tempArray = [];

function displayTable() {
    //Retrieve user inputs
    var foodName = document.getElementById("foodlabel").value;
    var servingAmount = document.getElementById("servinglabel").value;
    var calorieAmount = document.getElementById("calorielabel").value * servingAmount; 

    //Edit total calorie amount on screen
    totalCalories += calorieAmount;
    document.getElementById('total').innerHTML = "&nbsp TOTAL CALORIES: " + totalCalories;
    sessionStorage.setItem("totalcalories", totalCalories);

    //If any required box is empty, alert message will appear.
    if(!foodName || !calorieAmount || !servingAmount) {
        alert("Please fill out the required boxes.");
        return;
    }
    
    //Store session information 
    tempArray.push(foodName);
    tempArray.push(servingAmount);
    tempArray.push(calorieAmount);
    sessionStorage.setItem("tempArray", JSON.stringify(tempArray));

    //Create a new row to be inserted into the table
    var newRow = table.insertRow(row);

    //Insert food name, servings, calories into a row
    var temp0 = newRow.insertCell(0);
    var temp1 = newRow.insertCell(1);
    var temp2 = newRow.insertCell(2);

    //Add the row we just made into a new column on the table
    temp0.innerHTML = foodName;
    temp1.innerHTML = servingAmount;
    temp2.innerHTML = calorieAmount;

    //Reset input labels to take new input
    document.getElementById("foodlabel").value = "";
    document.getElementById("calorielabel").value = "";
    document.getElementById("servinglabel").value = "";
    document.getElementById("proteinlabel").value = "";
    document.getElementById("carblabel").value = "";
    document.getElementById("fatslabel").value = "";

    row++;    
}

//Handles the reset button, will clear the table of foods and total calories
function resetTable() {
    row = 1;
    totalCalories = 0;
    document.getElementById('total').innerHTML = "&nbsp TOTAL CALORIES: " + totalCalories;
    var temp = document.getElementById("maintable");
    while (temp.rows.length > 1) {
        temp.deleteRow(1);
      }

    //Reset input labels to take new input
    document.getElementById("foodlabel").value = "";
    document.getElementById("calorielabel").value = "";
    document.getElementById("servinglabel").value = "";
    document.getElementById("proteinlabel").value = "";
    document.getElementById("carblabel").value = "";
    document.getElementById("fatslabel").value = "";

    //Resets session storage values
    tempArray = [];
    sessionStorage.setItem("tempArray", JSON.stringify(tempArray));
    sessionStorage.setItem("totalcalories", totalCalories);
}

//Handles storing table and calorie information for when the user leaves the page.
window.onload = function() {
    if(sessionStorage.getItem("firsttime") == 1) {
        resetTable();
    } else {
        var temp = JSON.parse(sessionStorage.getItem("tempArray"));
        var newRow = table.insertRow(row);
        var temp0 = newRow.insertCell(0);
        var temp1 = newRow.insertCell(1);
        var temp2 = newRow.insertCell(2);

        for(var i = 0; i < temp.length; i+=3) {
            temp0.innerHTML = temp[i];
            temp1.innerHTML = temp[i+1];
            temp2.innerHTML = temp[i+2];
        }

        document.getElementById('total').innerHTML = "&nbsp TOTAL CALORIES: " + sessionStorage.getItem("totalcalories");
    }
  }
