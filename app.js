/* DASH SAFARIS WEBSITE JAVASCRIPT */


/* HEADER */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* MOBILE MENU */

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


/* CLOSE MOBILE MENU */

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuButton.textContent = "☰";

  });

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* SCROLL ANIMATION */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(

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


/* YEAR */

const year = document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* WHATSAPP */

document
  .querySelectorAll('a[href*="wa.me"]')
  .forEach(button => {

    button.addEventListener("click", () => {

      console.log(
        "WhatsApp booking button clicked."
      );

    });

  });


/* PAGE LOADED */

console.log(
  "Dash Safaris concept website loaded."
);
