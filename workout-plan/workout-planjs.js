function addWorkout(){
    var workout = document.getElementById("selected_workout");
    var workoutToStr = workout.options[workout.selectedIndex].text;
    console.log(workoutToStr);

    var selected_value = document.getElementById("selected_workout")[0].value;
    if(selected_value == "default"){
        console.log("1");
    } else {
        console.log("2");
    }
}
