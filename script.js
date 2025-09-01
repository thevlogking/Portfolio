// ======================== THEME TOGGLE ========================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ======================== MOBILE MENU TOGGLE ========================
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
