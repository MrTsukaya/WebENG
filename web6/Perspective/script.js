var sidebar = document.getElementById("sidebar"); 
var main = document.getElementById("container");
var buttons = document.getElementsByClassName("buttonC");
var activeEffect;

function Reset(){
    let options = [
        "AIRBRN",
        "MoveLeft",
        "RotateLeft",
        "MoveDown",
        "RotateTop",
        "LayDown"
    ];

    for(animEffect of options){
        sidebar.classList.remove(animEffect);
        main.classList.remove(animEffect);
        //console.log("Usunięto ", animEffect);
    }
    BackwardsAnimation(activeEffect);
    shadow.style.visibility = "hidden";
}
function BackwardsAnimation(effectRev){
    console.log(effectRev);
    sidebar.classList.add(effectRev+"Rev");
    main.classList.add(effectRev+"Rev");

    setTimeout(()=>{
        console.log("Wymazałem ",activeEffect);
        sidebar.classList.remove(activeEffect+"Rev");
        main.classList.remove(activeEffect+"Rev");
    },500);
}
function pageAnimation(){
    main.classList.add(activeEffect);
    sidebar.classList.add(activeEffect);
    shadow.style.visibility = "visible";
    console.log(activeEffect);
}



function Active(button,effect){
    for(btn of buttons){
        btn.classList.remove('ActiveButton');
    }
    button.classList.add('ActiveButton');
    activeEffect = effect;
    switch(activeEffect){
        case 'AIRBRN':
            document.body.style.backgroundColor = "rgb(83, 78, 78)";
            break;
        case 'MoveLeft':
            document.body.style.backgroundColor = "rgb(243, 244, 245)";
            break;
        case 'RotateLeft':
            document.body.style.backgroundColor = "rgb(233, 110, 79)";
            break;
        case 'MoveDown':
            document.body.style.backgroundColor = "rgb(52, 73, 94)";
            break;
        case 'RotateTop':
            document.body.style.backgroundColor = "rgb(237, 205, 187)";
            break;
        case 'LayDown':
            document.body.style.backgroundColor = "rgb(83, 78, 78)";
            break;                
    }
}