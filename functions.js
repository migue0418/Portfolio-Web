// Home Slideshow
var slideIndex = 1;

function moveSlides(n) {
    slideIndex += n;
    var slides = document.getElementsByClassName("slides");
    
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    if(slideIndex < 1){
        slideIndex = slides.length;
    }

    showSlides();
}

function gotoSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    for (i=0; i<slides.length; i++){
        slides[i].classList.add('hidden');
    }

    for (i=0; i<dots.length; i++){
        dots[i].classList.remove('active');
    }

    slides[slideIndex-1].classList.remove('hidden');
    dots[slideIndex-1].classList.add('active');
}

// Resume tabs
function tabShowHide(idContent, idHeader){
    var tabs_header =["tabEducation", "tabCoding", "tabSoftware"];
    var tabs_content =["education", "coding", "software"];
    var i;

    for (i=0; i<tabs_header.length; i++){
        document.getElementById(tabs_header[i]).classList.remove('active');
    }

    for (i=0; i<tabs_content.length; i++){
        document.getElementById(tabs_content[i]).classList.add('hidden');
    }

    document.getElementById(idHeader).classList.add('active');
    document.getElementById(idContent).classList.remove('hidden');
    if(idHeader == "tabCoding"){
        activateCoding();
    }
}

function collapseIcon(tab) {
    var $dest = tab.getAttribute("data-target");
    if(tab.innerHTML == "+")
        tab.innerHTML = "-";
    else
        tab.innerHTML = "+";
    document.getElementById($dest).classList.toggle('hidden');
}

// Skill bars
function activateCoding () {
    var skills = document.getElementsByClassName("skillbar");
    var i;
    for(i=0; i<skills.length; i++){
        skills[i].style.width = null;
        setSkill(skills[i]);
    }
}

function setSkill(skill) {
    this.clearTimeout;
    skill.style.width = skill.getAttribute("data-value");
    skill.style.transition = "all 2s";
    skill.style.transitionDelay = "1s";

}