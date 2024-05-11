const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

$(".s1").hover(
    ()=>{
        $(".s1").animate({width:"70%"})
        $(".t1").css({scale:1,width:1000,height:"10rem"})
        $(".st1").animate({left:"42rem"})
    },
    ()=>{
        $(".s1").animate({width:"21%"})  
        $(".t1").css({scale:0,width:0})   
        $(".st1").animate({left:"5rem"})  
    }
)

$(".s2").hover(
    ()=>{
        $(".s2").animate({width:"70%"})
        $(".t2").css({scale:1,width:1000,height:"10rem"})
        $(".st2").animate({left:"42rem"})
    },
    ()=>{
        $(".s2").animate({width:"21%"})  
        $(".t2").css({scale:0,width:0})   
        $(".st2").animate({left:"5rem"})  
    }
)