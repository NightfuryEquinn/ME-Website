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

// Active Button for Left Menu
var leftMenu = document.getElementsByClassName("left-menu")[0];
var leftMenuAnchor = leftMenu.getElementsByTagName("a");

for (var i = 0; i < leftMenuAnchor.length; i++) {
    leftMenuAnchor[i].addEventListener("click", function() {
        var activeAnchor = document.getElementsByClassName("active");
        if (activeAnchor.length == 0) {
            this.className += "active";
        } else if (activeAnchor.length == 1) {
            activeAnchor[0].className = activeAnchor[0].className.replace("active", "");
            this.className += "active";
        };
    });
};

// Active Line Pointer for Left Menu
var leftMenu = document.getElementsByClassName("left-menu")[0];
var leftMenuSpan = leftMenu.getElementsByTagName("span");

for (var i = 0; i < leftMenuSpan.length; i++) {
    leftMenuSpan[i].addEventListener("click", function () {
        var activeLine = document.getElementsByClassName("active-line");
        var currentLine = this.getElementsByClassName("line-pointer");
        if (activeLine.length == 0) {
            currentLine[0].className = currentLine[0].className.replace("line-pointer", "active-line");   
        } else if (activeLine.length == 1) {
            activeLine[0].className = activeLine[0].className.replace("active-line", "line-pointer");
            currentLine[0].className = currentLine[0].className.replace("line-pointer", "active-line");   
        };
    });
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
var defSlide = 1;
showSlide(defSlide);

function slideNumber(t) {
    showSlide(defSlide = t);
};

function showSlide(t) {
    var i;
    var slides = document.getElementsByClassName("scd-slide");

    if (t > slides.length) {
        defSlide = 1;
    };

    if (t < 1) {
        defSlide = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[defSlide - 1].style.display = "flex";
};