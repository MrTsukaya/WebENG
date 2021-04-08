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
        {
            howMany[i].classList.remove("activeMail");
        }
        x.classList.add("activeMail");
        document.getElementById("tS").classList.add("tS");
        let temp = 0;

        for(let j=0;j<emails.length;j++)
            if(emails[j].title == x.children[1].children[1].innerHTML)
                temp = j;
        
        console.log(temp);
        mailContent.innerHTML = emails[temp].content;
        document.getElementById("titleBig").innerHTML = emails[temp].title;
        document.getElementById("tS").innerHTML = emails[temp].firstName+" "+emails[temp].lastName;
        document.getElementById("tSd").innerHTML = emails[temp].time;
    }
    unreadCounter.innerHTML = "("+unreadMessages+")";
}

window.onload = ()=> {
    unreadCounter.innerHTML = "("+unreadMessages+")";
    let x = document.getElementsByClassName('mailName');
    let y = document.getElementsByClassName('mailTitle');
    let z = document.getElementsByClassName('mailCont');

    mailContent.innerHTML = "To check a mail - click on it.<br>Content will be dynamically updated into this section.<br><br><br><br><br>What and what was used for:<br>1. HTML - structure,<br>2. CSS - Layout and responsive view,<br>3. JSON - Storage file,<br>4. JS - Dynamic update, listening to onclick events;<br><br><br><br><br>What's going on here:<br>JS's listening for onlick event at .message box, then he reduces unread messages counter on left bar by 1, removes her 'unread message border' and gives her 'active message border', while displaying content of this message<br><br>Project made by 13390";

    for(let i=0;i<7;i++){
        x[i].innerHTML = (emails[i].firstName+" "+emails[i].lastName).toUpperCase();
        y[i].innerHTML = emails[i].title;
        z[i].innerHTML = (emails[i].content).split(' ').splice(0, 15).join(' ');
    }
}