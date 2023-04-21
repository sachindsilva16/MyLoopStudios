
const btn = document.getElementById("menu-button");


const menu = document.getElementById("menu");

const navLink1=document.getElementById("nav__link1");
const navLink2=document.getElementById("nav__link2");
const navLink3=document.getElementById("nav__link3");
const navLink4=document.getElementById("nav__link4");
const navLink5=document.getElementById("nav__link5");


const underline1=document.getElementById("1");
const underline2=document.getElementById("2");
const underline3=document.getElementById("3");
const underline4=document.getElementById("4");
const underline5=document.getElementById("5");

btn.addEventListener("click", toggleNav);

navLink1.addEventListener("mouseover",activeLinkOn1);
navLink1.addEventListener("mouseout",activeLinkOff1);

navLink2.addEventListener("mouseover",activeLinkOn2);
navLink2.addEventListener("mouseout",activeLinkOff2);

navLink3.addEventListener("mouseover",activeLinkOn3);
navLink3.addEventListener("mouseout",activeLinkOff3);

navLink4.addEventListener("mouseover",activeLinkOn4);
navLink4.addEventListener("mouseout",activeLinkOff4);

navLink5.addEventListener("mouseover",activeLinkOn5);
navLink5.addEventListener("mouseout",activeLinkOff5);


function toggleNav() {

    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}



function activeLinkOn1(){
    underline1.classList.add("underlined");

}


function activeLinkOff1(){
    underline1.classList.remove("underlined");

}

function activeLinkOn2(){
    underline2.classList.add("underlined");

}


function activeLinkOff2(){
    underline2.classList.remove("underlined");

}

function activeLinkOn3(){
    underline3.classList.add("underlined");

}


function activeLinkOff3(){
    underline3.classList.remove("underlined");

}

function activeLinkOn4(){
    underline4.classList.add("underlined");

}


function activeLinkOff4(){
    underline4.classList.remove("underlined");

}

function activeLinkOn5(){
    underline5.classList.add("underlined");

}


function activeLinkOff5(){
    underline5.classList.remove("underlined");

}













