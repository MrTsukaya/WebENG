var isLeftActive = false;
var button = document.getElementById("switchButton");

function Swap() {
    if(isLeftActive){
        button.innerHTML = '<i class="fas fa-arrow-alt-circle-left" style="color:white;"></i> Switch to Happy Sushi Lunch';
        isLeftActive = false;
    }
    else{
        button.innerHTML = 'Switch to Sushi Lover\'s Lunch! <i class="fas fa-arrow-alt-circle-right" style="color:white;"></i>';
        isLeftActive = true;
    }
}