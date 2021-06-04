var formName = document.getElementById("formName");
var formEmail = document.getElementById("formEmail");
var formMessage = document.getElementById("formMessage");
var labels = document.getElementsByClassName("formLabel");

var matchName = /^[a-zA-Z ]{2,50}$/;
var matchEmail = /^[^\s@]+@[^\s@]+$/;

var allGood = true;

function check(){
   try{
       // Sprawdzenie czy nie puste
       // Usuwanie komunikatu jeśli zawiera coś w sobie
        if(formName.value == ""){labels[0].style.display = "block";allGood = false;}
        else {labels[0].style.display = "none";allGood = true;}
        if(formEmail.value == ""){labels[1].style.display = "block";allGood = false;}
        else {labels[1].style.display = "none";allGood = true;}
        if(formMessage.value == ""){labels[2].style.display = "block";allGood = false;}
        else {labels[2].style.display = "none";allGood = true;}

      // Sprawdzanie poprawności zapisu
        let test = (formName.value).match(matchName);
        if(!test){labels[0].style.display = "block";allGood = false;}
        else {labels[0].style.display = "none";allGood = true;}

        test = (formEmail.value).match(matchEmail);
        if(!test){labels[1].style.display = "block";allGood = false;}
        else {labels[1].style.display = "none";allGood = true;}

        if(allGood){
            alert("Here should lie POST method, but for now ... RELOAD!");
            location.reload();
        }

   }catch(error){console.log(error)};
}