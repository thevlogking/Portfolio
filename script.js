// ======================== THEME TOGGLE ========================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-theme");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ======================== MOBILE MENU ========================
const mobileMenuBtn = document.querySelector(".mobile-menu");
const navLinks = document.getElementById("nav-links");
const menuOverlay = document.getElementById("menu-overlay"); // Add this in HTML

function closeMenu() {
  navLinks.classList.remove("active");
  mobileMenuBtn.classList.remove("active");
  menuOverlay?.classList.remove("active");
}

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
  menuOverlay?.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      setTimeout(() => {
        const sectionId = href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const rect = section.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({
            top: rect.top + scrollTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 400);
    }
  })
);

menuOverlay?.addEventListener("click", closeMenu);

// ======================== EMAILJS ========================
emailjs.init("V6bBQR5En2QgEGFUe"); // Your public key

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show sending state
  formStatus.textContent = "Sending...";
  formStatus.style.color = "#555";

  emailjs
    .sendForm("service_l7jmzdw", "template_2wigm6o", this)
    .then((res) => {
      console.log("EmailJS Success:", res);
      formStatus.textContent = "Message sent successfully! ✅";
      formStatus.style.color = "green";
      contactForm.reset();
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      formStatus.textContent = "Oops! Something went wrong. ❌";
      formStatus.style.color = "red";
      // Show better error details in console only
      alert("Failed to send message. Please try again later.");
    });
});
