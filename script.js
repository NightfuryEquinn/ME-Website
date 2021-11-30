// Scroll Content
function scrollContent() {
    var ypx = document.documentElement.scrollTop;
    if (ypx < 1000) {
        document.getElementsByClassName("record-container")[0].style.display = "none";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "none";
        document.getElementsByClassName("left-menu")[0].style.display = "none";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 2000) {
        document.getElementsByClassName("record-container")[0].style.display = "none";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "none";
        document.getElementsByClassName("main-page")[0].style.display = "flex";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 3000) {
        document.getElementsByClassName("record-container")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "flex";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 4000) {
        document.getElementsByClassName("record-container")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "flex";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 5000) {
        document.getElementsByClassName("record-container")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "flex";
        document.getElementsByClassName("fifth-page")[0].style.display = "none";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 6000) {
        document.getElementsByClassName("record-container")[0].style.display = "flex";
        document.getElementsByClassName("titlebox-middle")[0].style.display = "none";
        document.getElementsByClassName("titlebox-topleft")[0].style.display = "block";
        document.getElementsByClassName("left-menu")[0].style.display = "flex";
        document.getElementsByClassName("main-page")[0].style.display = "none";
        document.getElementsByClassName("second-page")[0].style.display = "none";
        document.getElementsByClassName("third-page")[0].style.display = "none";
        document.getElementsByClassName("fourth-page")[0].style.display = "none";
        document.getElementsByClassName("fifth-page")[0].style.display = "flex";
        document.getElementsByClassName("sixth-page")[0].style.display = "none";

    } else if (ypx < 7000) {
        document.getElementsByClassName("record-container")[0].style.display = "flex";
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
        window.scrollTo(0, 2500);
    } else if (a == 2) {
        window.scrollTo(0, 3500);
    } else if (a == 3) {
        window.scrollTo(0, 4500);
    } else if (a == 4) {
        window.scrollTo(0, 5500);
    } else if (a == 5) {
        window.scrollTo(0, 6500);
    } else if (a == 6) {
        window.scrollTo(0, 1500);
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
var bgm1 = document.getElementById("bgmOne");
var bgm2 = document.getElementById("bgmTwo");
var bgm3 = document.getElementById("bgmThree");
var playDisc = document.getElementsByClassName("record-container")[0];

function onoff() {
    if (bgm1.muted == false) {
        bgm1.muted = true;
        bgm1.pause();
        playDisc.style.animationName = "";
    } else if (bgm2.muted == false) {
        bgm2.muted = true;
        bgm2.pause();
        playDisc.style.animationName = "";
    } else if (bgm3.muted == false) {
        bgm3.muted = true;
        bgm3.pause();
        playDisc.style.animationName = "";
    }
};

// On Snow-Buried Tales 
function onOne() {
    if (bgm2.muted == true && bgm3.muted == true) {
        bgm1.muted = false;
        bgm1.play();
        playDisc.style.animationName = "rotate";
    } else {
        bgm2.muted = true;
        bgm2.pause();
        bgm3.muted = true;
        bgm3.pause();
        bgm1.muted = false;
        bgm1.play();
        playDisc.style.animationName = "rotate";
    }
};

// On Glistening Shards
function onTwo() {
    if (bgm1.muted == true && bgm3.muted == true) {
        bgm2.muted = false;
        bgm2.play();
        playDisc.style.animationName = "rotate";
    } else {
        bgm1.muted = true;
        bgm1.pause();
        bgm3.muted = true;
        bgm3.pause();
        bgm2.muted = false;
        bgm2.play();
        playDisc.style.animationName = "rotate";
    }
};

// On Chattering Snowflakes
function onThree() {
    if (bgm1.muted == true && bgm2.muted == true) {
        bgm3.muted = false;
        bgm3.play();
        playDisc.style.animationName = "rotate";
    } else {
        bgm1.muted = true;
        bgm1.pause();
        bgm2.muted = true;
        bgm2.pause();
        bgm3.muted = false;
        bgm3.play();
        playDisc.style.animationName = "rotate";
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

// Fifth Page Slideshow
var deffidSlide = 1;
showfidSlide(deffidSlide);

function fidSlide(t) {
    showfidSlide(deffidSlide = t);
};

function showfidSlide(t) {
    var i;
    var slides = document.getElementsByClassName("fid-slide");

    if (t > slides.length) {
        deffidSlide = 1;
    };

    if (t < 1) {
        deffidSlide = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[deffidSlide - 1].style.display = "flex";
};