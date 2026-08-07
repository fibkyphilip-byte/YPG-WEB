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

close.onclick = function() {
    lightbox.style.display = "none";
};

lightbox.onclick = function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    };
};