/*
    Cynthia Sheng
*/

function displayWeight() {
    var w = document.getElementById("weightStat");
    var wg = document.getElementById("weightGraph");
    var c = document.getElementById("calorieStat");
    var cg = document.getElementById("calorieGraph");
    var m = document.getElementById("macroStat");
    var mg = document.getElementById("macroChart");

    w.style.display = "block";
    wg.style.display = "block"
    c.style.display = "none";
    cg.style.display = "none";
    m.style.display = "none";
    mg.style.display = "none";
}

function displayCalorie() {
    var w = document.getElementById("weightStat");
    var wg = document.getElementById("weightGraph");
    var c = document.getElementById("calorieStat");
    var cg = document.getElementById("calorieGraph");
    var m = document.getElementById("macroStat");
    var mg = document.getElementById("macroChart");

    w.style.display = "none";
    wg.style.display = "none"
    c.style.display = "block";
    cg.style.display = "block";
    m.style.display = "none";
    mg.style.display = "none";
}

function displayMacro() {
    var w = document.getElementById("weightStat");
    var wg = document.getElementById("weightGraph");
    var c = document.getElementById("calorieStat");
    var cg = document.getElementById("calorieGraph");
    var m = document.getElementById("macroStat");
    var mg = document.getElementById("macroChart");

    w.style.display = "none";
    wg.style.display = "none"
    c.style.display = "none";
    cg.style.display = "none";
    m.style.display = "block";
    mg.style.display = "block";
}