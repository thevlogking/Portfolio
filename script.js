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
const mobileMenuBtn = document.getElementById("mobile-menu"); // ✅ match the HTML ID
const navLinks = document.getElementById("nav-links");       // also match your HTML ID

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Optional: Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
