localStorage['facts'] = JSON.stringify(['Anxiety can make bad smells even worse.','Men are more forgetful than women.','Eating eggs improves your reflexes.','Your blood makes up nearly one-tenth of your total body weight.',
                                        'A tick bite can make you allergic to red meat.','The scent of apples can ease claustrophobia.','Most of the fat you lose exits your body via your lungs.','Humans are the only animals with chins.']);


var firstTime = sessionStorage.getItem("firsttime");

if(!firstTime) {
  //It is your first time on this page
  sessionStorage.setItem("firsttime", 1);
} else {
  //It is NOT your first time on this page
  sessionStorage.setItem("firsttime", 2);
}

//Ask user for information once
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

//Handles the save button when you fill out the form
function saveForm() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var currweight = document.getElementById("currweight").value;
    var goalweight = document.getElementById("goalweight").value;

    sessionStorage.setItem("hellomsg", "&nbsp Hello " + name + "!");
    sessionStorage.setItem("datemsg", "&nbsp Today's Date is: " + date);
    sessionStorage.setItem("currweightmsg", "&nbsp Your Current Weight is: " + currweight);
    sessionStorage.setItem("goalweightmsg", "&nbsp Your Desired Goal Weight is: " + goalweight);

    document.getElementById("tempmsg").innerHTML = ""; 
    document.getElementById("hellomsg").innerHTML = "&nbsp Hello " + name + "!"; 
    document.getElementById("datemsg").innerHTML = "&nbsp Today's Date is: " + date;
    document.getElementById("currweightmsg").innerHTML = "&nbsp Your Current Weight is: " + currweight;
    document.getElementById("goalweightmsg").innerHTML = "&nbsp Your Desired Goal Weight is: " + goalweight;

    document.getElementById("popupForm").style.display = "none";
}

//Shows popup if it is your first time visiting this page.
window.onload = function() {
  if(sessionStorage.getItem("firsttime") == 1) {
      openForm();
  } else {
    document.getElementById("hellomsg").innerHTML = sessionStorage.getItem("hellomsg");
    document.getElementById("datemsg").innerHTML = sessionStorage.getItem("datemsg");
    document.getElementById("currweightmsg").innerHTML = sessionStorage.getItem("currweightmsg");
    document.getElementById("goalweightmsg").innerHTML = sessionStorage.getItem("goalweightmsg");
    document.getElementById("tempmsg").innerHTML = ""; 
  }
}