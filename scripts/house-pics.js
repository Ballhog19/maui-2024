let slideIndex = 1;
document.querySelector(".prev").addEventListener("click", e => plusSlides(-1))
document.querySelector(".next").addEventListener("click", e => plusSlides(1))
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    console.log(`plusSlides(${n})`)
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {    
    let i;
    let slides = document.querySelectorAll(".mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}