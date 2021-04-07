let unreadMessages = 0;
let unreadCounter = document.getElementById("counter");

function check(x){
    let ifTrue = x.classList.contains('selectedMail');
    if(ifTrue){
        x.className = "message";
        unreadMessages--;
    }
    else{
        x.className = "message selectedMail";
        unreadMessages++;
    }
    unreadCounter.innerHTML = "("+unreadMessages+")";
}

window.onload = ()=> {
    let x = document.getElementsByClassName('mailName');
    let y = document.getElementsByClassName('mailTitle');
    let z = document.getElementsByClassName('mailCont');

    for(let i=0;i<7;i++){
        x[i].innerHTML = (emails[i].firstName+" "+emails[i].lastName).toUpperCase();
        y[i].innerHTML = emails[i].title;
        z[i].innerHTML = (emails[i].content).split(' ').splice(0, 15).join(' ');
    }
}