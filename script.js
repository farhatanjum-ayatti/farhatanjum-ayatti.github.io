// ================= TYPING EFFECT =================

const roles = [
  "Aspiring Data Scientist",
  "AI & Python Developer",
  "Machine Learning Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

  let currentRole = roles[roleIndex];

  if (!isDeleting) {

    typingText.textContent = currentRole.substring(0, charIndex++);

    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent = currentRole.substring(0, charIndex--);

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= SCROLL TO TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.onclick = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


// ================= REVEAL ANIMATION =================

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.15
});

document.querySelectorAll(
".about-card, .skill-card, .project-card, .cert-card, .contact-card"
)
.forEach(el => observer.observe(el));


// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
  } else {
    nav.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
  }

});