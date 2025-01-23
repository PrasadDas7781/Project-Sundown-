
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var fixed=document.querySelector("#fixed-image")

var ElemC=document.querySelector("#elem-container")
ElemC.addEventListener("mouseenter",function(){
 fixed.style.display =  "block"

})
var ElemC=document.querySelector("#elem-container")
ElemC.addEventListener("mouseleave",function(){
 fixed.style.display =  "none"
})

var elmes=document.querySelectorAll(".elem")
elmes.forEach((e)=>{
  e.addEventListener("mouseenter",()=>{
    var image=e.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${image})`
  })
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

});