
const MenuItems = document.getElementById("MenuItems")
MenuItems.style.maxHeight ="0px";
function menutog(){
    if(MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px"
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}