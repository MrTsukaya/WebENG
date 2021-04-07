let unreadMessages = document.getElementsByClassName('notReadMail').length;
let unreadCounter = document.getElementById("counter");
let mailContent = document.getElementById("contentBig");

function check(x){
    let ifNotRead = x.classList.contains('notReadMail');
    let ifActive = x.classList.contains('activeMail');
    let howMany = document.getElementsByClassName('message');

    if(ifNotRead){
        x.classList.remove('notReadMail');
        unreadMessages--;
    }
    /*else{
        x.className = "message notReaddMail";
        unreadMessages++;
    }*/
    if(!ifActive){
        for(let i=0;i<howMany.length;i++)
            howMany[i].classList.remove("activeMail");
        x.classList.add("activeMail");
        let temp = 0;

        for(let j=0;j<emails.length;j++)
            if(emails[j].title == x.children[1].children[1].innerHTML)
                temp = j;
        
        console.log(temp);
        mailContent.innerHTML = emails[temp].content;
    }
    unreadCounter.innerHTML = "("+unreadMessages+")";
}

window.onload = ()=> {
    unreadCounter.innerHTML = "("+unreadMessages+")";
    let x = document.getElementsByClassName('mailName');
    let y = document.getElementsByClassName('mailTitle');
    let z = document.getElementsByClassName('mailCont');

    for(let i=0;i<7;i++){
        x[i].innerHTML = (emails[i].firstName+" "+emails[i].lastName).toUpperCase();
        y[i].innerHTML = emails[i].title;
        z[i].innerHTML = (emails[i].content).split(' ').splice(0, 15).join(' ');
    }
}