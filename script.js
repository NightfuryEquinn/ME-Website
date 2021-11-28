// Scroll Content
function scrollContent() {
    var ypx = document.documentElement.scrollTop;
    if (ypx < 200) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "none";
        document.getElementsByClassName("left-menu")[0].style.display = "none";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 400) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "none";
        document.getElementsByClassName("main-page")[0].style.display = "flex";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 600) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "flex";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 800) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "flex";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 1000) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "flex";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 1200) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "flex";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 1400) {
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "flex";
    };
};

window.onscroll = scrollContent;

// Anchor Link
function anchorLink(a) {
    if (a == 1) {
        window.scrollTo(0, 500);
    } else if (a == 2) {
        window.scrollTo(0, 700);
    } else if (a == 3) {
        window.scrollTo(0, 900);
    } else if (a == 4) {
        window.scrollTo(0, 1100);
    } else if (a == 5) {
        window.scrollTo(0, 1300);
    } else if (a == 6) {
        window.scrollTo(0, 300);
    };
};

// Parallex Mouse Move
document.addEventListener('mousemove', delayParallax);
const par1 = document.getElementById("pi1");
const par2 = document.getElementById("pi2");

function delayParallax (e) {
    setTimeout(function parallax() {
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const mouseSpeed1 = `${(mouseX - x) * 0.05}px, ${(mouseY - y) * 0.1}px`;
        const mouseSpeed2 = `${(mouseX - x) * 0.025}px, ${(mouseY - y) * 0.05}px`;
    
        par1.style.transform = `translate(${mouseSpeed1})`; 
        par2.style.transform = `translate(${mouseSpeed2})`; 
    }, 0);
};

// Mute and Unmute Background Music
function onoff() {
    var bgm = document.getElementById("bgm");
    if (bgm.muted == true) {
        bgm.muted = false;
        bgm.play();
    } else {
        bgm.muted = true;
    }
};

// Second Page Slideshow
var defscdSlide = 1;
showscdSlide(defscdSlide);

function scdSlide(t) {
    showscdSlide(defscdSlide = t);
};

function showscdSlide(t) {
    var i;
    var slides = document.getElementsByClassName("scd-slide");

    if (t > slides.length) {
        defscdSlide = 1;
    };

    if (t < 1) {
        defscdSlide = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[defscdSlide - 1].style.display = "flex";
};

// Third Page Slideshow
var deftrdSlide = 1;
showtrdSlide(deftrdSlide);

function trdSlide(t) {
    showtrdSlide(deftrdSlide = t);
};

function showtrdSlide(t) {
    var i;
    var slides = document.getElementsByClassName("trd-slide");

    if (t > slides.length) {
        deftrdSlide = 1;
    };

    if (t < 1) {
        deftrdSlide = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[deftrdSlide - 1].style.display = "flex";
};

// Fourth Page Slideshow
var deffrhSlide = 1;
showfrhSlide(deffrhSlide);

function frhSlide(t) {
    showfrhSlide(deffrhSlide = t);
};

function showfrhSlide(t) {
    var i;
    var slides = document.getElementsByClassName("frh-slide");

    if (t > slides.length) {
        deffrhSlide = 1;
    };

    if (t < 1) {
        deffrhSlide = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[deffrhSlide - 1].style.display = "flex";
};