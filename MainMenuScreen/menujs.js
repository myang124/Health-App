/*
//used to see if its the users first time opening app
console.log(window.localStorage.getItem("first time"));

if(window.localStorage.getItem("first time") != 1){
    window.localStorage.setItem("first time", 1);
}

console.log(window.localStorage.getItem("first time"));
//user prompt to ask first time usres for name/goal/gender
//window.localStorage.setItem("first time", 0);
*/


//Ask user for information once
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

function saveForm() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var currweight = document.getElementById("currweight").value;
    var goalweight = document.getElementById("goalweight").value;

    document.getElementById("tempmsg").innerHTML = ""; 
    document.getElementById("hellomsg").innerHTML = "&nbsp Hello " + name + "!"; 
    document.getElementById("datemsg").innerHTML = "&nbsp Today's Date is: " + date;
    document.getElementById("currweightmsg").innerHTML = "&nbsp Your Current Weight is: " + currweight;
    document.getElementById("goalweightmsg").innerHTML = "&nbsp Your Desired Goal Weight is: " + goalweight;

    document.getElementById("popupForm").style.display = "none";
}