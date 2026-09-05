/* =========================================================
   DASH SAFARIS — WEBSITE JAVASCRIPT
   ========================================================= */


/* ================= HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

  if (mobileMenu.classList.contains("active")) {
    menuButton.textContent = "×";
  } else {
    menuButton.textContent = "☰";
  }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    menuButton.textContent = "☰";

  });

});


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


/* ================= WHATSAPP ================= */

document.querySelectorAll('a[href*="wa.me"]').forEach(button => {

  button.addEventListener("click", () => {

    console.log("WhatsApp booking button clicked.");

  });

});


/* ================= IMAGE FALLBACK ================= */

document.querySelectorAll("img").forEach(image => {

  image.addEventListener("error", () => {

    image.style.background = "#173d2a";
    image.style.minHeight = "200px";
    image.alt = "Safari image";

  });

});


/* ================= PAGE READY ================= */

console.log(
  "Dash Safaris website concept loaded successfully."
);
