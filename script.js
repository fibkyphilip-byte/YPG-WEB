const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show");
});

const images = document.querySelectorAll(".show");
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

//REVEAL ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(
        "section:not(.hero), .event-header, .events, .theme, .theme-box, .member-card, .member-content"
    );
    revealElements.forEach(element => {
        element.classList.add("scroll-reveal");
    });
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                //ANIMATE ONLY ONCE 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.10, rootMargin: "0px 0px -80px 0px"
    });
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

// NAV HIGHLIGHT
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("#sidebar a");
    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage && linkPage.split("/").pop() === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
});

// FORM SUBMISSION
Document.getElementById("contact-form")?.addEventListener("submit",async function(e){
    e.preventDefault();
    const form = this;
    const status = document.getElementById("form-status");
    const button = form.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = "sending...";
    status.style.display = "block";
    status.textContent = "Sending your message...";

    try{
        const response = await fetch(form.action,{
            method:"POST",
            body: new FormData(form),
            headers:{"Accept": "application/json"}
        });
        if (response.ok){
            status.textContent = "Your message has been sent successfully!",
            status.style.color = "green";
            form.reset();
        } else{
            status.textContent = "Sorry, your message could not be sent. Please try again.";
            status.style.color = "red";
        }
    } catch (error){
        status.textContent = "Connection error. Please check your internet and try again.";
        status.style.color = "red";
    } finally {
        button.disabled = false;
        button.textContent = "Send message";
    }
});