var modal = document.getElementById("modal");
           var modalContent = document.getElementById("modalContent");
           
           var images1 = document.getElementsByClassName("gallery1");
           var images2 = document.getElementsByClassName("gallery2");
           var images3 = document.getElementsByClassName("gallery3");

           var close = document.getElementById("closeX");
           var previous = document.getElementById("previous");
           var next = document.getElementById("next");
           var now = {
            nowGallery: null,
            nowPicture: 0
           };

            for(let i = 0; i<images1.length; i++){
                images1[i].addEventListener("click", () => {
                now.nowGallery = images1;
                now.nowPicture = i;
                show(images1[i].src);
                });
            }
            for(let i = 0; i<images2.length; i++){
                images2[i].addEventListener("click", () => {
                now.nowGallery = images2;
                now.nowPicture = i;
                show(images2[i].src);
                });
            }
            for(let i = 0; i<images3.length; i++){
                images3[i].addEventListener("click", () => {
                now.nowGallery = images3;
                now.nowPicture = i;
                show(images3[i].src);
                });
            }

            previous.addEventListener("click", ()=>{
                slide(now.nowGallery,now.nowPicture,"left");
            });
            next.addEventListener("click", ()=>{
                slide(now.nowGallery,now.nowPicture,"right");
            });

            closeX.addEventListener("click", ()=>{
                modal.style.visibility = 'hidden';
            })
            modalContent.addEventListener("click", ()=> {
                console.log("działa");
            })

            function show(link){
                modal.style.visibility = 'visible';
                modalContent.style.backgroundImage = "url("+link+")";
            }
            function slide(gallery,picture,direction){
                if(direction == "right"){
                    if(gallery[picture+1] == null){
                        picture = -1;
                        now.nowPicture = -1;    
                    }
                    now.nowPicture += 1;
                    show(gallery[picture+1].src);
                }
                if(direction == "left"){
                    if(picture == 0){
                        picture = gallery.length;
                        now.nowPicture = gallery.length;
                    }
                    now.nowPicture -= 1;
                    show(gallery[picture-1].src);
                }
            }