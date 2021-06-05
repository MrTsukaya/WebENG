var sidebar = document.getElementById("sidebar"); 
var main = document.getElementById("container");
var shadow = document.getElementById("shadow");
var currentEffect;

function Reset(){
    let options = [
        "SlideInOnTop",
        "Reveal",
        "Push",
        "SlideAlong",
        "ReverseSlideOut",
        "RotatePusher",
        "RotateIn3D",
        "RotateOut3D",
        "ScaleDownPusher",
        "ScaleUp",
        "ScaleRotatePusher",
        "OpenDoor",
        "FallDown",
        "DelayedRotate3D"
    ];

    for(animEffect of options){
        sidebar.classList.remove(animEffect);
        main.classList.remove(animEffect);
        //console.log("Usunięto ", animEffect);
    }
    BackwardsAnimation(currentEffect);
    shadow.style.visibility = "hidden";
}
function BackwardsAnimation(effectRev){
    console.log(effectRev);
    sidebar.classList.add(effectRev+"Rev");
    main.classList.add(effectRev+"Rev");

    setTimeout(()=>{
        console.log("Wymazałem ",currentEffect);
        sidebar.classList.remove(currentEffect+"Rev");
        main.classList.remove(currentEffect+"Rev");
    },500);
}
function sidebarAnimation(effect){
    sidebar.classList.add(effect);
    main.classList.add(effect);
    shadow.style.visibility = "visible";
    console.log(effect);
    currentEffect = effect;
}