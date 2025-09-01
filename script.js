// ======================== THEME TOGGLE ========================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️";
}
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  body.classList.contains("dark-theme") ? 
    (toggleBtn.textContent="☀️", localStorage.setItem("theme","dark")) :
    (toggleBtn.textContent="🌙", localStorage.setItem("theme","light"));
});

// ======================== MOBILE MENU ========================
const mobileMenuBtn = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
mobileMenuBtn.addEventListener("click", ()=> navLinks.classList.toggle("active"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", ()=> navLinks.classList.remove("active")));

// ======================== EMAILJS ========================
emailjs.init("V6bBQR5En2QgEGFUe"); // Your public key

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  formStatus.textContent = "Sending...";
  formStatus.style.color = "#000";

  emailjs.sendForm("service_l7jmzdw","template_2wigm6o",this)
    .then(res=>{
      console.log(res);
      formStatus.textContent = "Message sent successfully! ✅";
      formStatus.style.color = "green";
      contactForm.reset();
    })
    .catch(err=>{
      console.error(err);
      formStatus.textContent = "Oops! Something went wrong. ❌";
      formStatus.style.color = "red";
      alert("Error: " + JSON.stringify(err));
    });
});
