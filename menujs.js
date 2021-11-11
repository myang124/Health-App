/*
Facts Citations:
1. https://www.businessinsider.com/scientific-reasons-to-eat-healthy-2016-7#of-course-eating-right-is-one-of-the-best-ways-to-maintain-a-healthy-weight-dont-forget-to-exercise-and-sleep-too-17
2. https://blog.uvahealth.com/2019/01/08/15-fun-facts-exercise/
https://www.thegoodbody.com/health-facts/
*/

localStorage['facts'] = JSON.stringify(['Eating eggs improves your reflexes.',
'The scent of apples can ease claustrophobia.',
'Most of the fat you lose exits your body via your lungs.', 'Eating right could reduce your risk for some cancers.', 'A large study found unhealthy diets full of processed foods cost $1.50 more a day than healthy ones full of whole foods.'
, "Eating right could improve men's fertility", 'Eating right could boost your energy and enhance your athletic performance.', 'People who eat well tend to live longer, and they have fewer health complications so they enjoy the extra time.',
"Studies have found people who follow healthy diets are less likely to develop dementia and Alzheimer's.", "A healthy diet could boost your immunity and help keep you from getting sick.",
"People who don’t regularly exercise may lose up to 80% of their muscle strength by age 65.", "Regular exercise helps lower blood pressure and cholesterol levels", "Improve your mental health and mood with an exercise routine",
"Exercise keeps your metabolism elevated even after your workout, and continues to burn more calories even at rest","You use 200 muscles to take a single step forward.", "The pressure on your feet is equal to about 3-4 times your body weight with each step while running",
"Your heart is the hardest working muscle in your body. It beats approximately 100,000 times per day, pumping almost 2,000 gallons of blood.","During physical activity, you breathe more to keep oxygen levels in your blood at appropriate levels",
"The knee is the largest and most complex joint in your body which makes it most likely to be injured", "Fat and muscle are completely different types of tissue. Muscle cannot turn into fat", "If you can’t speak a few words without taking a breath, you may be exercising too intensely",
"Being dehydrated reduces exercise performance", "Opposite of people who cross-train, people who do the same daily type of exercise regularly are more prone to injury", "Studies indicate that children’s physical activity levels correlate closely with those of their parents",
'Laughing is good for the heart and can increase blood flow by 20 percent.','Always look on the bright side: being an optimist can help you live longer. ','Exercise will give you more energy, even when you’re tired. ',' 39% of adults in the world are overweight.',
'Smelling rosemary may increase alertness and improve memory','Swearing can make you feel better when you’re in pain. ','Writing in a journal can make you a happier person! ','Chewing gum makes you more alert, relieves stress and reduces anxiety levels.',
'Yoga can boost your cognitive function and lower stress. ','Eating oatmeal provides a serotonin boost to calm the brain and improve your mood. ','Apples can reduce levels of bad cholesterol to keep your heart healthy.']);


var facts = JSON.parse(localStorage['facts']);

//display daily fact
if(sessionStorage.getItem("firstday") == null){
  
  var rand = Math.floor(Math.random() * 35);
  alert("Random daily health fact! \nDid you know: \n" + facts[rand]);

  sessionStorage.setItem("firstday",1); 
}

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
    var heightft = document.getElementById("heightft").value;
    var heightin = document.getElementById("heightin").value;
    var heightinInches = Number(heightft*12)+Number(heightin);
    var bmi = (((currweight)/(heightinInches**2)) * 703).toFixed(2);


    sessionStorage.setItem("hellomsg", "&nbsp Hello " + name + "!");
    sessionStorage.setItem("datemsg", "&nbsp Today's Date is: " + date);
    sessionStorage.setItem("currweightmsg", "&nbsp Your Current Weight is: " + currweight);
    sessionStorage.setItem("goalweightmsg", "&nbsp Your Desired Goal Weight is: " + goalweight);
    sessionStorage.setItem("bmi", "&nbsp Your current BMI is: " + bmi);

    document.getElementById("tempmsg").innerHTML = ""; 
    document.getElementById("hellomsg").innerHTML = "&nbsp Hello " + name + "!"; 
    document.getElementById("datemsg").innerHTML = "&nbsp Today's Date is: " + date;
    document.getElementById("currweightmsg").innerHTML = "&nbsp Your Current Weight is: " + currweight;
    document.getElementById("goalweightmsg").innerHTML = "&nbsp Your Desired Goal Weight is: " + goalweight;
    document.getElementById("bmi").innerHTML = "&nbsp Your current BMI is: " + bmi;

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
    document.getElementById("bmi").innerHTML = sessionStorage.getItem("bmi");
    document.getElementById("tempmsg").innerHTML = ""; 
  }
}