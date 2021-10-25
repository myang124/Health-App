localStorage['upperbody'] = JSON.stringify(['Pushup', 'Bench press', 'Overhead press', 'Incline bench press', 'Bentover row', 'Pullup',
'Dumbbell curl', 'Hammer curl', 'Triceps pushdown', 'Dip', 'Lying triceps extension', 
 'Lateral raise' , 'Bentover lateral raise', 'Face pull', 'Shrug']);

 var upperbodylist = JSON.parse(localStorage['upperbody']);
 //localStorage.clear();


//adds the workout when ADD is clicked
function addWorkout(){

    //string that is in the input field
    var workout = document.getElementById("workouts");
    var workoutToStr = workout.value;
    
    var bodypart = localStorage.getItem("body_part");
    //first check if workout is in the list

    //dis is .... wack
    // local storage doesnt have lists, so have to use JSON parsing
    if(bodypart == "upperbody"){
        var inList = upperbodychecklist(workoutToStr);     
        if(inList === true){
            if(localStorage.getItem(localStorage.getItem("day")) == null){
                var list = [workoutToStr];
                localStorage[localStorage.getItem('day')] = JSON.stringify(list);
                //localStorage.setItem(localStorage.getItem("day"), list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
            }
            console.log(localStorage.getItem(localStorage.getItem("day")));
        } else {
            alert("This workout is not in the list.");
        }
    } 
}

//updates the textfeild when a dropdown is clicked
function changeInputText(){
    var temp = document.getElementById("workouts");
    temp.value = document.getElementById("selected_val").value;
}

function changeSelectText(){
    var temp = document.getElementById("selected_val");
    temp.value = document.getElementById("workouts").value;
}

//checks if user input text is part of the lists of workouts
function upperbodychecklist(workoutToStr){

    for(var index = 0; index < upperbodylist.length; index++){
        if(upperbodylist[index].toLowerCase() == workoutToStr.toLowerCase()){
            return true;
        }
    }
    return false;
}


// keeps track of the day that was clicked to add workout to that day
function setDay(clicked_id){
    localStorage.setItem("day",clicked_id);
    console.log(localStorage.getItem("day"));
}

//keeps track of the body part that was slected to workout to keep track of that part.
function setBody(clicked_id){
    localStorage.setItem("body_part", clicked_id);
    console.log(localStorage.getItem("body_part"));
}

