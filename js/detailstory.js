// const scrolla = document.querySelector('.section-content__pointer');
// const pagedetailstory = document.querySelector('.page-detailstory');
// let windowscroll = 0;
// let arrayitem = document.querySelectorAll(".section-item");
// let footer = document.querySelector(".footer").offsetHeight;
// let arraysection = [];
// let pagedetailstorya = document.querySelector(".page-detailstory");
// let detailstoryaoffset = pagedetailstorya.offsetHeight - footer - 220 ;
// window.onscroll = function(){
//     scrolla.style.width= (window.pageYOffset / (pagedetailstory.scrollHeight - window.innerHeight)) 
//     * 100 +"%";
//     windowscroll = window.pageYOffset;
//     if(windowscroll >= detailstoryaoffset)
//     {
//        document.querySelector(".section-content").classList.add("active");
//     }
//     else if(windowscroll <= detailstoryaoffset) 
//     {
//         document.querySelector(".section-content").classList.remove("active");
//     }
//      arrayitem.forEach(function(index,array)
//     {
//        let a = arrayitem[array].offsetTop + arrayitem[array].offsetHeight;
//        arraysection.push(a);
//        console.log(arraysection);
//     })
// }
const scrolla = document.querySelector('.section-content__pointer');
const pagedetailstory = document.querySelector('.page-detailstory');
let windowscroll = 0;
let arrayitem = document.querySelectorAll(".section-item");
let footer = document.querySelector(".footer").offsetHeight;
let arraysection = [];
let gitem = document.querySelectorAll(".g-item-1");
let vitri = 0;
let dema= 0;
let demb=0
let demdown = 0;
let pagedetailstorya = document.querySelector(".page-detailstory");
window.onscroll = function(){
    windowscroll = window.pageYOffset;
    console.log("Scroll",windowscroll);
    console.log("Vị Trí",vitri);
    gitem.forEach(function(x,y)
    {
        gitem[y].offsetTop;
       if(!arraysection.includes(gitem[y].offsetTop))
        {
            arraysection.push(gitem[y].offsetTop);
        }
    })
    let arraysectiona = arraysection.length-1;
    if(windowscroll > vitri)
    {
        arraysection.forEach(function(x,y)
        {
            if(y == 0)
            {
    
            }
           else if(windowscroll > arraysection[y] && windowscroll < arraysection[y + 1] )
           {
                 gitem[y - 1].classList.remove("activescroll");
                 gitem[y].classList.add("activescroll");
                 vitri = windowscroll - 1;
                 console.log("vị trí",vitri);
           }
           else if(windowscroll >= arraysection[arraysectiona] )
           {
                gitem[y - 1].classList.remove("activescroll");
                gitem[y].classList.add("activescroll");
                vitri =  windowscroll - 1;
                console.log("vị trí",vitri);
           }
           

        //    else if(windowscroll >= arraysection[arraysectiona])
        //    {
        //          console.log("Mảng",gitem);
        //    }
        })
    }
    else if(windowscroll <= vitri)
    {
        arraysection.sort((a,b)=>b-a)
        demdown = arraysection.length-1;
        console.log( demdown);
        arraysection.forEach(function(x,y)
        {
            if(y == 0)
            {
                arraysectiona--;
            }
              else if(windowscroll <= arraysection[y] && windowscroll <= arraysection[y + 1])
            {
                gitem[arraysectiona+1].classList.remove("activescroll");
                gitem[arraysectiona].classList.add("activescroll");
                vitri =  windowscroll - 1;
                console.log(arraysectiona)
                arraysectiona--;
            }
            // else if(windowscroll==0)
            // {
            //     gitem[1].classList.remove("activescroll");
            //     gitem[0].classList.add("activescroll");
            //     console.log(arraysectiona)
               
            // }
            // else if(windowscroll == 0)
            // {
            //     gitem[1].classList.remove("activescroll");
            //     gitem[0].classList.add("activescroll");
            // }
        })
    }
   
}



