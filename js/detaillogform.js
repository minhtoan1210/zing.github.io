let menu = document.querySelector(".detaillogform-header");
let vitri = 0;
window.onscroll = function(){
        windowscroll = window.pageYOffset;
        if(windowscroll > vitri)
        {
            menu.classList.add("activemenu");
            vitri=windowscroll;
        }
        else if(windowscroll < vitri)
        {
            menu.classList.remove("activemenu");
            vitri=windowscroll;
        }
}