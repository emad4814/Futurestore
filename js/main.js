document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider-container .slide");
    let index = 0;

    function switchSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(switchSlide, 2500);
});
