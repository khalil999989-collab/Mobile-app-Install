/*=========================================
PREMIUM MOBILE INSTALL LANDING PAGE
SCRIPT.JS
=========================================*/

const OFFER_URL = "https://singingfiles.com/show.php?l=0&u=2535160&id=75066";

/*=========================================
BUTTON LINKS
=========================================*/

const offerButton = document.getElementById("offerButton");
const offerButton3 = document.getElementById("offerButton3");
const offerButton4 = document.getElementById("offerButton4");
const navButton = document.getElementById("navButton");

if (offerButton) offerButton.href = OFFER_URL;
if (offerButton3) offerButton3.href = OFFER_URL;
if (offerButton4) offerButton4.href = OFFER_URL;
if (navButton) navButton.href = OFFER_URL;

/*=========================================
MOUSE GLOW
=========================================*/

const glow = document.querySelector(".mouse-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

}

/*=========================================
COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = Number(counter.dataset.target);

let current = 0;

const speed = target/100;

const update = ()=>{

current += speed;

if(current < target){

counter.innerText = Math.ceil(current);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
FAQ
=========================================*/

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const item = button.parentElement;

const answer = item.querySelector(".faq-answer");

const icon = button.querySelector("i");

const opened = item.classList.contains("active");

/* Close All */

document.querySelectorAll(".faq-item").forEach(faq=>{

faq.classList.remove("active");

faq.querySelector(".faq-answer").style.maxHeight = "0px";

faq.querySelector("i").classList.remove("fa-xmark");

faq.querySelector("i").classList.add("fa-plus");

});

/* Open Current */

if(!opened){

item.classList.add("active");

answer.style.maxHeight = answer.scrollHeight + "px";

icon.classList.remove("fa-plus");

icon.classList.add("fa-xmark");

}

});

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(

".stat-card,.benefit-card,.step-card,.review-card,.faq-item"

);

const revealObserver = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

reveals.forEach(item=>{

item.classList.add("reveal");

revealObserver.observe(item);

});

/*=========================================
NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 40){

navbar.style.background = "rgba(8,16,24,.95)";

navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background = "rgba(8,16,24,.88)";

navbar.style.boxShadow = "none";

}

});

/*=========================================
BUTTON GLOW
=========================================*/

document.querySelectorAll(".cta-button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

if(glow){

glow.style.transform="translate(-50%,-50%) scale(1.6)";

}

});

btn.addEventListener("mouseleave",()=>{

if(glow){

glow.style.transform="translate(-50%,-50%) scale(1)";

}

});

});

const activities = [
    {name:"Michael", country:"United States", status:"Completed"},
    {name:"Emma", country:"Canada", status:"Verified"},
    {name:"James", country:"United Kingdom", status:"Success"},
    {name:"Olivia", country:"Australia", status:"Completed"},
    {name:"Daniel", country:"Germany", status:"Verified"},
    {name:"Sophia", country:"France", status:"Success"},
    {name:"Lucas", country:"Brazil", status:"Completed"},
    {name:"Noah", country:"Spain", status:"Verified"},
    {name:"Liam", country:"Italy", status:"Success"},
    {name:"Ethan", country:"Netherlands", status:"Completed"}
];

let i1 = 0;
let i2 = 2;
let i3 = 4;
let i4 = 6;

function updateCard(id, index){
    document.getElementById("liveName1").classList.add("fade");
    document.getElementById("liveCountry1").classList.add("fade");
    document.getElementById("liveStatus1").classList.add("fade");

    document.getElementById("liveName"+id).textContent =
        activities[index].name;

    document.getElementById("liveCountry"+id).textContent =
        activities[index].country;

    document.getElementById("liveStatus"+id).textContent =
        activities[index].status;

        setTimeout(()=>{

updateCard(1,i1);

document.getElementById("liveName1").classList.remove("fade");

document.getElementById("liveCountry1").classList.remove("fade");

document.getElementById("liveStatus1").classList.remove("fade");

},300);
}

setInterval(function(){

    i1 = (i1 + 1) % activities.length;
    i2 = (i2 + 1) % activities.length;
    i3 = (i3 + 1) % activities.length;
    i4 = (i4 + 1) % activities.length;

    updateCard(1, i1);
    updateCard(2, i2);
    updateCard(3, i3);
    updateCard(4, i4);

}, 3500);

