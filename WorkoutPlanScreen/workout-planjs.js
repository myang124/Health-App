localStorage['upperbody'] = JSON.stringify(['Pushup', 'Bench press', 'Overhead press', 'Incline bench press', 'Bentover row', 'Pullup',
'Dumbbell curl', 'Hammer curl', 'Triceps pushdown', 'Dip', 'Lying triceps extension', 'Lateral raise' , 'Bentover lateral raise', 'Face pull', 'Shrug']);

 localStorage['lowerbody'] = JSON.stringify(['Dumbbell squat','Dumbbell goblet squat','Bulgarian split squat','side lunge','Glute bridge',
                                             'Forward lunge','Step-ups','Side leg lift with band','Jumping jacks','Dead lifts','Calf raises']);

localStorage['core'] = JSON.stringify(['Forearm Plank','Russian Twist','Butterfly Sit-Up','High Boat to Low Boat','Forearm Plank Rock','Side Bend',
                                         'Jackknife','Wheelbarrow','Leg Raise','Core Roll-Up','Bicycle Crunch']);

localStorage['cardio'] = JSON.stringify(['Jump rope' , 'Jumping jacks', 'Burpees' , 'Squat jumps' , 'High intensity interval training (HIIT)', 'Elliptical',
                                            'Stair climber','Exercise bike','Treadmill','Rowing machine','Swimming']);

 var upperbodylist = JSON.parse(localStorage['upperbody']);
 var lowerbodylist = JSON.parse(localStorage['lowerbody']);
 var corelist = JSON.parse(localStorage['core']);
 var cardiolist = JSON.parse(localStorage['cardio']);
 //localStorage.clear();
//display list of workouts user has added
function viewList(){
    var div = document.getElementById("mylist");
    var lst = JSON.parse(localStorage[localStorage.getItem('day')]);
    var ul = document.getElementById("workoutList");

    div.appendChild(ul);
    for(var index = 0; index < lst.length; index++){

        var li = document.createElement("li");
        li.innerHTML = lst[index];
        li.style.textAlign = "left";
        li.style.position = "relative";
        li.style.margin = "5px 0";
        
        var btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.style.position = "absolute";
        btn.right = "0%";
        btn.onclick = function() { 
            var str = this.parentElement.textContent.slice(0, -1);
            this.parentElement.remove()
            var list = JSON.parse(localStorage[localStorage.getItem("day")]);
            for(var e = 0; e < list.length; e++){
                if(list[e] == str){
                    list.splice(e,1);
                }
            }
            localStorage[localStorage.getItem("day")] = JSON.stringify(list);
        };

        li.append(btn);
        ul.appendChild(li);
    }
    
}

//adds the workout when ADD is clicked
function addWorkout(){
    
    var bodypart = localStorage.getItem("body_part");
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
            //display new added workout
            var temp = document.getElementById("workoutList");
            temp.innerHTML = "";
            viewList();
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
            var temp = document.getElementById("workoutList");
            temp.innerHTML = "";
            viewList();
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
            var temp = document.getElementById("workoutList");
            temp.innerHTML = "";
            viewList();
        } else {
            alert("This workout is not in the list.");
        }
    }

    else if(bodypart == "cardio_"){

        var workout = document.getElementById("workoutCA");
        var workoutToStr = workout.value;
        console.log(workoutToStr);
        var inList = cardiochecklist(workoutToStr);  
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
            var temp = document.getElementById("workoutList");
            temp.innerHTML = "";
            viewList();
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
            var temp = document.getElementById("workoutList");
            temp.innerHTML = "";
            viewList();
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
    } else if(id == "ca") {
        temp = document.getElementsByClassName("workouts")[3];
        temp.value = document.getElementById("selected_val_ca").value;
    }
    else if(id == "m"){
        temp = document.getElementsByClassName("workouts")[5];
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
    } else if(id == "workoutCA"){
        var temp = document.getElementById("selected_val_ca");
        temp.value = document.getElementsByClassName("workouts")[3].value;
    }
    else if(id == "workoutMY"){
        var temp = document.getElementById("selected_val_my");
        temp.value = document.getElementsByClassName("workouts")[5].value;
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

function cardiochecklist(workoutToStr){
    for(var index = 0; index < cardiolist.length; index++){
        if(cardiolist[index].toLowerCase() == workoutToStr.toLowerCase()){
            return true;
        }
    }
    return false;
}

function mychecklist(workoutToStr){
    var mylist = JSON.parse(localStorage['my']);
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
    // ||  document.getElementById("select_val_my") == null
    if(localStorage.getItem("clicked") != "true" || !localStorage.getItem("clicked")){
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

//this adds a new workout to MY when user clicked add workout button
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