/* =========================================================
   ZAMBEZI WILD SAFARIS
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

  menuButton.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

  });


  const mobileLinks =
    mobileMenu.querySelectorAll("a");

  mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.style.overflow = "";

    });

  });

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const siteHeader =
  document.getElementById("siteHeader");

function updateHeader() {

  if (window.scrollY > 50) {

    siteHeader.classList.add("scrolled");

  } else {

    siteHeader.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

document.querySelectorAll(
  'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener("click", function(event) {

    const targetId =
      this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const headerOffset = 70;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".experience-card, .package-card, .review, .feature, .gallery-item"
  );

if ("IntersectionObserver" in window) {

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12
      }
    );

  revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

  });

}


/* =========================================================
   WHATSAPP BOOKING
========================================================= */

const whatsappButtons =
  document.querySelectorAll(
    ".whatsapp-button, .whatsapp-float"
  );

whatsappButtons.forEach(button => {

  button.addEventListener("click", () => {

    console.log(
      "Opening WhatsApp enquiry..."
    );

  });

});


/* =========================================================
   SIMPLE IMAGE FALLBACK
========================================================= */

document.querySelectorAll(
  ".card-image, .package-image, .gallery-item, .about-image"
).forEach(element => {

  element.addEventListener(
    "error",
    () => {

      element.style.backgroundImage =
        "none";

      element.style.backgroundColor =
        "#183529";

    }
  );

});


/* =========================================================
   CONSOLE BRANDING
========================================================= */

console.log(
  "%c ZAMBEZI WILD SAFARIS ",
  "background:#0b2118;color:#dfc98f;padding:8px;font-weight:bold;"
);

console.log(
  "Premium tourism website demo loaded successfully."
);
