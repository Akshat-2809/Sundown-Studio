function moveMent(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
moveMent()

var elemA = document.querySelector(".elem-container")
var fixedimg = document.querySelector(".fixed-image")
elemA.addEventListener("mouseenter",function(){
    fixedimg.style.display = "block"
})
elemA.addEventListener("mouseleave",function(){
    fixedimg.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(display){
    display.addEventListener("mouseenter",function(){
        var image = display.getAttribute("data-image")
        fixedimg.style.backgroundImage = `url(${image})`
    })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function menuAnimation() {

  var menu = document.querySelector("nav h3")
  var full = document.querySelector(".full-screen")
  var navimg = document.querySelector("nav img")
  var flag = 0
  menu.addEventListener("click", function () {
      if (flag == 0) {
          full.style.top = 0
          navimg.style.opacity = 0
          flag = 1
      } else {
          full.style.top = "-100%"
          navimg.style.opacity = 1
          flag = 0
      }
  })
}
menuAnimation()

var loader = document.querySelector(".loader")
setTimeout(function(){
  loader.style.top = "-100%"
},4000)