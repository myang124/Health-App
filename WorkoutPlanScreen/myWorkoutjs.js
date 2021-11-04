var temp = localStorage.getItem(localStorage.getItem("day") + "list");
var myList = JSON.parse(temp);



//remove all checked elements
function removeChecked(){
    var list = document.querySelectorAll('input[type="checkbox"]:checked');
    
    for(var index = 0; index < list.length; index++){
        console.log(list[index].parentElement.textContent);
    }
}

