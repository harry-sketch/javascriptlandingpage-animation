const navSlide = () =>{
      const nav = document.querySelector(".nav-links");
      const hamburger = document.querySelector("#hamburger"); 
      hamburger.addEventListener("click",()=>{
         nav.classList.toggle('nav-active');
         hamburger.classList.toggle('toggle');
      });
};

navSlide();


const headline = document.querySelector(".headline");
const slider = document.querySelector(".slider");
const showcase = document.querySelector(".showcase");

const tl = new TimelineMax();

tl.fromTo(showcase,1,{height:"0%"},{height:"80%"})
.fromTo(showcase,1.2,{width:"100%"},{width:"80%"})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%"},"-=1.2")
.fromTo(headline,2,{x:"30",opacity:"0"},{x:"0",opacity:"1"},"-=1.2")