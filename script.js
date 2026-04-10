const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// search
const searchContainer = document.querySelector(".search-container");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

// accordion
document.querySelectorAll(".menu-header").forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});

// banner animation

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    const progressBar = document.querySelector('.progress-bar');

    function startSlide() {
        // reset animation
        progressBar.classList.remove('progress-animate');
        void progressBar.offsetWidth; // force reflow
        progressBar.classList.add('progress-animate');

        // change slide after 3s
        setTimeout(() => {
            index = (index + 1) % totalSlides;
            slides.style.transform = `translateX(-${index * 100}%)`;
            startSlide(); // loop
        }, 3000);
    }

    startSlide();
});
