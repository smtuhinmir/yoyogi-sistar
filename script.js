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