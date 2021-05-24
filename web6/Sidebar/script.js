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
    shadow.style.visibility = "hidden";
}

function sidebarAnimation(effect){
    Reset();
    sidebar.classList.add(effect);
    main.classList.add(effect);
    shadow.style.visibility = "visible";
    console.log(effect);
    currentEffect = effect;
}