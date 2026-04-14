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

//section
function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const wrapper = slider.parentElement;
  const leftBtn = wrapper.querySelector(".arrow.left");
  const rightBtn = wrapper.querySelector(".arrow.right");

  const originalItems = Array.from(slider.children);
  const total = originalItems.length;

  // 🔥 CLONE ALL ITEMS (before & after)
  originalItems.forEach(item => {
    slider.appendChild(item.cloneNode(true));
  });

  originalItems.slice().reverse().forEach(item => {
    slider.insertBefore(item.cloneNode(true), slider.firstChild);
  });

  let index = total; // start in middle

  function getCardWidth() {
    const card = slider.querySelector(".product");
    const gap = parseInt(getComputedStyle(slider).gap) || 0;
    return card.offsetWidth + gap;
  }

  function update(animate = true) {
    const width = getCardWidth();
    slider.style.transition = animate ? "transform 0.5s ease-in-out" : "none";
    slider.style.transform = `translateX(-${index * width}px)`;
  }

  update(false);

  function move(dir) {
    index += dir;
    update(true);
  }

  rightBtn.onclick = () => move(1);
  leftBtn.onclick = () => move(-1);

  // 🔥 AUTO SLIDE
  let auto = setInterval(() => move(1), 3000);

  slider.addEventListener("mouseenter", () => clearInterval(auto));
  slider.addEventListener("mouseleave", () => {
    auto = setInterval(() => move(1), 3000);
  });

  // 🔥 SEAMLESS LOOP FIX (APPLE MAGIC)
  slider.addEventListener("transitionend", () => {
    if (index >= total * 2) {
      index = total;
      update(false); // instant snap (no animation)
    }

    if (index < total) {
      index = total * 2 - 1;
      update(false);
    }
  });
}

// INIT BOTH
initSlider("slider1");
initSlider("slider2");
