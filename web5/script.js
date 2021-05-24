var isLeftActive = false;
var button = document.getElementById("switchButton");
var leftCard = document.getElementById("leftCard");
var rightCard = document.getElementById("rightCard");

function Swap() {
    if(isLeftActive){
        button.innerHTML = '<i class="fas fa-arrow-alt-circle-left" style="color:white;"></i> Switch to Happy Sushi Lunch';
        isLeftActive = false;
        rightCard.classList.remove("rightInactive");
        leftCard.classList.remove("leftActive");
        rightCard.classList.add("rightActive");
        leftCard.classList.add("leftInactive");
    }
    else{
        button.innerHTML = 'Switch to Sushi Lover\'s Lunch! <i class="fas fa-arrow-alt-circle-right" style="color:white;"></i>';
        isLeftActive = true;
        rightCard.classList.remove("rightActive");
        leftCard.classList.remove("leftInactive");
        rightCard.classList.add("rightInactive");
        leftCard.classList.add("leftActive");
    }
}