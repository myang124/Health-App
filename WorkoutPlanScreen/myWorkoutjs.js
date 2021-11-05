var temp = localStorage.getItem(localStorage.getItem("day") + "list");
var myList = JSON.parse(temp);



//remove all checked elements
function removeChecked(){
    var list = document.querySelectorAll('input[type="checkbox"]:checked');
    
    for(var index = 0; index < list.length; index++){
        var target = list[index].parentElement.textContent;
        for(var t = 0; t < myList.length; t++){
            if(target == myList[t]){
                myList.splice(t,1);
            }
        }
    }
    localStorage[localStorage.getItem("day") + "list"] = JSON.stringify(myList);
    viewList();
}

function viewList(){
            //js to display workouts
            var ul = document.getElementById("checklist");

            ul.innerHTML = "";

            for(var index = 0; index < myList.length; index++){
    
                var li = document.createElement("li");
                li.innerHTML = myList[index];
                var input = document.createElement("input");
                input.type = "checkbox";

                ul.appendChild(li);
                li.appendChild(input);
            }
}