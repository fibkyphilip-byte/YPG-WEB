const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show");
});

const images = document.querySelectorAll(".leaders");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const close = document.getElementById("close");

images.forEach(image => {
    image.onclick = function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    };
});

if (close) {
    close.onclick = function() {
    lightbox.style.display = "none";
    };
}

if (lightbox) {
    lightbox.onclick = function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
        };
    };
}

const particles = document.querySelector(".particles");
if (particles) {
    for (let i = 0; i < 17; i++) {
    const dot = document.createElement("span");
    dot.classList.add("particle");
    dot.style.left = Math.random() * 100 + "%";
    const size = Math.random() * 10 + 5;
    dot.style.width = size + "px";
    dot.style.height = size + "px";
    dot.style.animationDuration = (Math.random() * 15 + 15) + "s";
    particles.appendChild(dot);
    }
}

const mainNav = document.querySelector(".main-nav");
window.addEventListener("scroll", function(){
    if (window.scrollY > 50) {
        mainNav.classList.add("scrolled");
    } else {
        mainNav.classList.remove("scrolled");
    }
});

const dropdownArrow = document.querySelector(".dropdown-arrow");
const navDropdown = document.querySelector(".nav-dropdown");
if (dropdownArrow) {
    dropdownArrow.addEventListener("click", function(){
        navDropdown.classList.toggle("active");
    });
}