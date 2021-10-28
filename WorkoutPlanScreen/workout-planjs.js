localStorage['upperbody'] = JSON.stringify(['Pushup', 'Bench press', 'Overhead press', 'Incline bench press', 'Bentover row', 'Pullup',
'Dumbbell curl', 'Hammer curl', 'Triceps pushdown', 'Dip', 'Lying triceps extension', 'Lateral raise' , 'Bentover lateral raise', 'Face pull', 'Shrug']);

 localStorage['lowerbody'] = JSON.stringify(['Dumbbell squat','Dumbbell goblet squat','Bulgarian split squat','side lunge','Glute bridge',
                                             'Forward lunge','Step-ups','Side leg lift with band','Jumping jacks','Dead lifts','Calf raises']);

localStorage['core'] = JSON.stringify(['Forearm Plank','Russian Twist','Butterfly Sit-Up','High Boat to Low Boat','Forearm Plank Rock','Side Bend',
                                         'Jackknife','Wheelbarrow','Leg Raise','Core Roll-Up','Bicycle Crunch']);

 var upperbodylist = JSON.parse(localStorage['upperbody']);
 var lowerbodylist = JSON.parse(localStorage['lowerbody']);
 var corelist = JSON.parse(localStorage['core']);
 var mylist = JSON.parse(localStorage['my']);
 //localStorage.clear();


//adds the workout when ADD is clicked
function addWorkout(){
    
    var bodypart = localStorage.getItem("body_part");
    console.log(bodypart);
    //first check if workout is in the list

    //dis is .... wack
    // local storage doesnt have lists, so have to use JSON parsing
    if(bodypart == "upperbody"){
        //string that is in the input field
        var workout = document.getElementById("workoutUP");
        var workoutToStr = workout.value;

        var inList = upperbodychecklist(workoutToStr);     
        if(inList === true){
            if(localStorage.getItem(localStorage.getItem("day")) == null){
                var list = [workoutToStr];
                localStorage[localStorage.getItem('day')] = JSON.stringify(list);
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

    else if(bodypart == "lowerbody"){
        var workout = document.getElementById("workoutLO");
        var workoutToStr = workout.value;

        var inList = lowerbodychecklist(workoutToStr);  
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

    else if(bodypart == "core_"){
        
        var workout = document.getElementById("workoutCO");
        var workoutToStr = workout.value;

        var inList = corehecklist(workoutToStr);  
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

    else if(bodypart == "My_"){
        var workout = document.getElementById("workoutMY");
        var workoutToStr = workout.value;


        var inList = mychecklist(workoutToStr);  
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
function changeInputText(id){
    var temp;
    if(id == "upper"){
        temp = document.getElementsByClassName("workouts")[0];
        temp.value = document.getElementById("selected_val_up").value;
    } else if (id == "lower"){
        temp = document.getElementsByClassName("workouts")[1];
        temp.value = document.getElementById("selected_val_lo").value;
    } else if(id == "c"){
        temp = document.getElementsByClassName("workouts")[2];
        temp.value = document.getElementById("selected_val_co").value;
    } else if(id == "m"){
        temp = document.getElementsByClassName("workouts")[4];
        temp.value = document.getElementById("selected_val_my").value;
    }
}

//updates slect on text input
function changeSelectText(id){
    if(id == "workoutUP"){
        var temp = document.getElementById("selected_val_up");
        temp.value = document.getElementsByClassName("workouts")[0].value;
    }
    else if(id == "workoutLO"){
        var temp = document.getElementById("selected_val_lo");
        temp.value = document.getElementsByClassName("workouts")[1].value;
    } else if(id == "workoutCO"){
        var temp = document.getElementById("selected_val_co");
        temp.value = document.getElementsByClassName("workouts")[2].value;
    } else if(id == "workoutMY"){
        var temp = document.getElementById("selected_val_my");
        temp.value = document.getElementsByClassName("workouts")[4].value;
    }
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

function lowerbodychecklist(workoutToStr){

    for(var index = 0; index < lowerbodylist.length; index++){
        if(lowerbodylist[index].toLowerCase() == workoutToStr.toLowerCase()){
            return true;
        }
    }
    return false;
}

function corehecklist(workoutToStr){
    for(var index = 0; index < corelist.length; index++){
        if(corelist[index].toLowerCase() == workoutToStr.toLowerCase()){
            return true;
        }
    }
    return false;
}

function mychecklist(workoutToStr){
    for(var index = 0; index < mylist.length; index++){
        if(mylist[index].toLowerCase() == workoutToStr.toLowerCase()){
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

/*need to use js to create html for personal made workouts */
function myWorkout(){
    //check to see if user already clicked my. 
    //if user keeps clicking the button then these elements are going to keep being made./.. (:Odkabwdajlk)
    if(localStorage.getItem("clicked") != "true" || !localStorage.getItem("clicked") || document.getElementById("select_val_my") == null){
        localStorage.setItem("clicked", "true");

        var mydiv = document.getElementsByClassName("addWorkout")[0]; 
        var container = document.getElementsByClassName("myContainer")[0];
        var sec = document.getElementById("my");
        const datalist = document.createElement("datalist");
        datalist.setAttribute("id", "my_workouts");
        const select = document.createElement("select");
        select.setAttribute("id", "selected_val_my");

        sec.append(container);
        container.append(mydiv);
        mydiv.append(datalist);
        datalist.append(select);

        //need to add all the personal workouts already created here
        if(localStorage.getItem("my") != null){
            var my = JSON.parse(localStorage['my']);
            for(var index = 0; index < my.length; index++){
                var opt = document.createElement("option");
                opt.value = my[index];
                opt.innerHTML = my[index];
                opt.setAttribute("id", "m");
                opt.setAttribute("onclick", "changeInputText('m')");
                select.append(opt);
            }
        }
    } 

}

function setClickedFalse(){
    localStorage.setItem("clicked","false");
    var d = document.getElementById("my_workouts");
    var s = document.getElementById("selected_val_my");

    if(d != null){
        d.remove();
        s.remove();
    }

}

function createPersonalWorkout(){
    var input = document.getElementById("input").value;

    if(input != ""){
        var select = document.getElementById("selected_val_my");

        var opt = document.createElement("option");
        opt.value = input;
        opt.innerHTML = input;
        opt.setAttribute("id", "m");
        opt.setAttribute("onclick", "changeInputText('m')");
        select.appendChild(opt);

        if(localStorage.getItem("my") == null){
            localStorage['my'] = JSON.stringify([input]);
        } else {
            var my = JSON.parse(localStorage['my']);
            //first check if workout exists or not
            if(my.includes(input)){
                alert("You already added this workout");
            } else {
                my.push(input);
                var str = JSON.stringify(my);
                localStorage.setItem("my",str);
            }
        }
    } else {
        alert("You have not entered anything.")
    }
}