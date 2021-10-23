
//used to see if its the users first time opening app
console.log(window.localStorage.getItem("first time"));

if(window.localStorage.getItem("first time") != 1){
    window.localStorage.setItem("first time", 1);
}

console.log(window.localStorage.getItem("first time"));
//user prompt to ask first time usres for name/goal/gender
//window.localStorage.setItem("first time", 0);