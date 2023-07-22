// Mobile_menu
document.addEventListener('DOMContentLoaded', function(){
    const menu= document.querySelector("#menu-bar")
    const navlist= document.querySelector("#nav-list")
    const hlink= document.querySelector(".links")
    const fasolid= document.querySelector(".fa-solid")
    const header = document.querySelector("header")
var i;
    menu.addEventListener("click", ()=>{
        navlist.classList.toggle('hidden')
        fasolid.classList.toggle('fa-xmark')
    });
    hlink.addEventListener('click' ,()=>{
        navlist.classList.toggle('hidden');
        fasolid.classList.toggle('fa-xmark');
    })

});
