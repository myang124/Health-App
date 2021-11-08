localStorage['upperbody'] = JSON.stringify(['Pushup', 'Bench press', 'Overhead press', 'Incline bench press', 'Bentover row', 'Pullup',
'Dumbbell curl', 'Hammer curl', 'Triceps pushdown', 'Dip', 'Lying triceps extension', 'Lateral raise' , 'Bentover lateral raise', 'Face pull', 'Shrug','Barbell Bench Press',
'Lat-pulldowns','Seated Dumbbell Press','Barbell Bicep Curls','Triceps Rope Pushdowns','Overhead Bar Extensions','EZ Bar Curls','Machine Chest Press','T-Bar Row','EZ Bar Upright Rows',
'Cable Fly','Skullcrushers','Chest Dip','One Arm Dumbbell Extension','Barbell Front Raise','Dumbbell Lateral Raise','Wide Grip Pull Up','Machine Reverse Fly','Upright Row','Dumbbell Flys',
'Cable Crossovers','Close Grip Bench Press','Seated Dumbbell Press','Bent Over Barbell Row','Smith Machine Upright Row','Dips','Pullups','Pulldowns']);

 localStorage['lowerbody'] = JSON.stringify(['Dumbbell squat','Dumbbell goblet squat','Bulgarian split squat','side lunge','Glute bridge','Leg Press Machine','Lunges','Leg Curl','Hamstring Curls',
                                             'Forward lunge','Step-ups','Side leg lift with band','Jumping jacks','Dead lifts','Calf raises','Leg Extensions','Close-Grip Pulldowns','Squat','Standing Calf Raise']);

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
        li.style.color = "white";
        li.style.textShadow = "#000 0px 0px 2px,   #000 0px 0px 2px,   #000 0px 0px 2px, #000 0px 0px 2px,   #000 0px 0px 2px,   #000 0px 0px 2px";
        
        var btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.style.position = "absolute";
        btn.style.color = "white";
        btn.style.background = "#6095f0";
        btn.right = "0%";
        btn.onclick = function() { 
            var str = this.parentElement.textContent.slice(0, -1);
            this.parentElement.remove()
            var list = JSON.parse(localStorage[localStorage.getItem("day")]);
            var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
            for(var e = 0; e < list.length; e++){
                if(list[e] == str){
                    list.splice(e,1);
                }
                if(list1[e] == str){
                    list1.splice(e,1);
                }
            }
            localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
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
                localStorage[localStorage.getItem('day') + "list"] = JSON.stringify(list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
                //need to create seperate list for workout page list to mark down.
                if(localStorage[localStorage.getItem("day") + "list"] == null){
                    localStorage[localStorage.getItem('day') + "list"] = JSON.stringify([workoutToStr]);
                } else {
                    var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
                    list1.push(workoutToStr);
                    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
                }
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
                localStorage[localStorage.getItem('day') + "list"] = JSON.stringify(list);
                //localStorage.setItem(localStorage.getItem("day"), list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
                if(localStorage[localStorage.getItem("day") + "list"] == null){
                    localStorage[localStorage.getItem('day') + "list"] = JSON.stringify([workoutToStr]);
                } else {
                    var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
                    list1.push(workoutToStr);
                    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
                }
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
                localStorage[localStorage.getItem('day') + "list"] = JSON.stringify(list);
                //localStorage.setItem(localStorage.getItem("day"), list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
                if(localStorage[localStorage.getItem("day") + "list"] == null){
                    localStorage[localStorage.getItem('day') + "list"] = JSON.stringify([workoutToStr]);
                } else {
                    var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
                    list1.push(workoutToStr);
                    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
                }
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
                localStorage[localStorage.getItem('day') + "list"] = JSON.stringify(list);
                //localStorage.setItem(localStorage.getItem("day"), list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
                if(localStorage[localStorage.getItem("day") + "list"] == null){
                    localStorage[localStorage.getItem('day') + "list"] = JSON.stringify([workoutToStr]);
                } else {
                    var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
                    list1.push(workoutToStr);
                    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
                }
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
                localStorage[localStorage.getItem('day') + "list"] = JSON.stringify(list);
                //localStorage.setItem(localStorage.getItem("day"), list);
            } else {
                var list = JSON.parse(localStorage[localStorage.getItem("day")]);
                list.push(workoutToStr);
                localStorage[localStorage.getItem("day")] = JSON.stringify(list);
                if(localStorage[localStorage.getItem("day") + "list"] == null){
                    localStorage[localStorage.getItem('day') + "list"] = JSON.stringify([workoutToStr]);
                } else {
                    var list1 = JSON.parse(localStorage[localStorage.getItem("day") + "list"]);
                    list1.push(workoutToStr);
                    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(list1);
                }
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

function generateWorkout(){
    var num = prompt("Type 1 for beginner, 2 for intermediate, or 3 for advanced workout.");
    var mon = [];
    var tu = [];
    var wed = [];
    var th = [];
    var fri = [];
    var sat = [];
    var sun = [];
    if(num == 1){
        mon = ['Barbell Bench Press - 4 sets of 8 reps','Lat-pulldowns - 4 sets of 10 reps','Seated Dumbbell Press - 4 sets of 10 reps',
               'Leg Extensions - 4 sets of 10 reps','Barbell Bicep Curls - 3 sets of 10 reps','Triceps Rope Pushdowns - 3 sets of 15 reps'];
        tu = ['Leg Press Machine – 4 sets of 8 reps','Overhead Bar Extensions – 3 sets of 20 reps','EZ Bar Curls – 4 sets of 10 reps',
              'Machine Chest Press – 4 sets of 10 reps','T-Bar Row – 4 sets of 10 reps','Lateral Raises – 3 sets of 20 reps'];
        wed = ['EZ Bar Upright Rows – 3 sets of 15 reps','Close-Grip Pulldowns – 4 sets of 12 reps','Cable Fly – 4 sets of 10 reps',
              'Lunges – 3 sets of 10 reps per leg','Skullcrushers – 3 sets of 15 reps','Hammer Curls – 3 sets of 12 reps'];
    } else if(num == 2){
        mon = ['Dumbbell Bench Press – 3 sets of 10 reps','Incline Dumbbell Bench Press – 3 sets of 10 reps','Chest Dip – 3 sets of reps','Skullcrushers – 3 sets of 8-10 Reps','One Arm Dumbbell Extension – 3 sets of 10 reps',
              'Tricep Extension – 3 sets of 10 reps','Barbell Front Raise – 4 sets of 12 reps','Dumbbell Lateral Raise – 4 sets of 15 reps']
        tu = ['Wide Grip Pull Up - 3 sets of reps','Lat Pull Down – 3 sets of 10 reps','Straight Arm Lat Pull Down – 3 sets of 10 reps','Machine Reverse Fly – 3 sets of 10 reps','Upright Row – 3 sets of 8 reps',
              'Standing Barbell Curl – 3 sets of 8-10 reps','Preacher Curl – 3 sets of 10 reps','Incline Dumbbell Curl – 3 sets of 10 reps'];
        wed = ['Squat – 4 sets of 10 reps','Dumbbell Lunge – 3 sets of 8 reps','45 Degree Leg Press – 3 sets of 12 reps','Leg Curl – 3 sets of 15 reps','Leg Extension – 3 sets of 15 reps','Standing Calf Raise – 5 sets of 10 reps',
              'Seated Calf Raise – 5 sets of 15 reps'];
        th = ['Barbell Bench Press – 3 sets of 10 reps','Dumbbell Flys – 3 sets of 10 reps','Cable Crossovers – 3 sets of 10 reps','Close Grip Bench Press – 4 sets of 10 reps','Lying Dumbbell Extension – 3 sets of 10 reps',
             'Tricep Kickback – 3 sets of 10 reps','Seated Dumbbell Press – 4 sets of 10 reps','One Arm Cable Lateral Raise – 3 sets of 12 reps'];
        fri = ['Seated Row – 4 sets of 10 reps','Bent Over Barbell Row – 3 sets of 10 reps','Bent Over Row – 3 sets of 12 reps','Smith Machine Upright Row – 3 sets of 8 reps','Cable Curl – 4 sets of 8 reps',
              'Concentration Curl – 3 sets of 10 reps','Reverse Barbell Curl – 3 sets of 10 reps'];
    } else if(num == 3){
        mon = ['Barbell Bench Press – 4 sets of 10 reps','Incline Dumbbell Press – 3 sets of 8 reps','Dips – 3 sets of 10 reps','Pullups – 3 sets of 8 reps','Pendlay Rows – 3 sets of 10 reps','Pulldowns – 3 sets of 10 reps'];
        tu = ['Squats - 4 sets of 10 reps','Leg Press – 3 sets of 10 reps','Stiff-Legged Deadlift – 5 sets of 5 reps','Hamstring Curls – 3 sets of 8 reps','Calf-Raise – 5 sets of 10 reps'];
        wed = ['Dumbbell Press – 3 sets of 8 reps','Lateral Raises – 5 sets of 10 reps','Barbell Curls – 5 sets of 10 reps','Dumbbell Curls – 3 sets of 10 reps'];
        fri = ['Flat Dumbbell Press – 5 sets of 6 reps','Incline Dumbbell Press – 3 sets of 10 reps','Hammer Strength Press – 3 sets of 10 reps','Cable Flys – 3 sets of 12 reps','Lateral Raises – 5 sets of 15 reps', 'Reverse-Grip Pull-Downs – 5 sets of 15 reps'];
        sat = ['Barbell Rows – 5 sets of 20 reps','Barbell Shrugs – 3 sets of 15 reps','Rack Deadlifts – 3 sets of 12 reps','Pullups – 3 sets of 10 reps','Pulldowns – 3 sets of 10 reps'];
        sun = ['Front Squats – 5 sets of 20 reps','Leg Extensions – 5 sets of 10 reps','Hamstring Curls – 5 sets of 10 reps','Seated Calf Raise – 5 sets of 10 reps','Standing Calf Raise – 3 sets of 12 reps'];
    } else {
        alert("You entered an invalid number");
        return;
    }


    localStorage["add_mondaylist"] = JSON.stringify(mon);
    localStorage["add_tuesdaylist"] = JSON.stringify(tu);
    localStorage["add_wednesdaylist"] = JSON.stringify(wed);
    localStorage["add_thursdaylist"] = JSON.stringify(th);
    localStorage["add_fridaylist"] = JSON.stringify(fri);
    localStorage["add_saturdaylist"] = JSON.stringify(sat);
    localStorage["add_sundaylist"] = JSON.stringify(sun);

    alert("workout complete! please click the days to view your workout plan.")
}