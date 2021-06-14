const listmenu=document.querySelectorAll(".listmenu")
const burgermenu=document.querySelector(".burgermenu")


listmenu.forEach(function(btns){

    btns.addEventListener("click",function(){

    listmenu.forEach(function(item){

        if(item!==btns){
            item.nextElementSibling.classList.remove("listactive")
            item.classList.remove("listmenuafter")
        }
    })
     
    btns.nextElementSibling.classList.toggle("listactive")
    btns.classList.toggle("listmenuafter")
    })
  
        
    })

    const burgerbtn=document.querySelector(".burgerbtn")
    const closebtn=document.querySelector(".closebtn")
    const openmenu=document.querySelector(".menumob")

    burgerbtn.addEventListener("click",function(){
     burgerbtn.style.display="none"
     closebtn.style.display="block"
     openmenu.style.display="block"

    })


    closebtn.addEventListener("click",function(){
        burgerbtn.style.display="block"
        closebtn.style.display="none"
        openmenu.style.display="none"
   
       })
   
 










