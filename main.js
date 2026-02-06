/* =========================
   ACTIVE HEADER LINK
========================= */
const headerLinks = document.querySelectorAll(".header-list a");
headerLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

/* =========================
   SCROLL BUTTON
========================= */
const scrollBtn = document.querySelector(".scroll-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
}

/* =========================
   INTERNAL SMOOTH SCROLL
========================= */
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =========================
   EMAIL JS INIT
========================= */
if (typeof emailjs !== "undefined") {
  emailjs.init("QTT-ZBxbRCnMEnvlU");
}

/* =========================
   CONTACT FORM
========================= */
const contactForm = document.querySelector(".contact-form");
if (contactForm && typeof emailjs !== "undefined") {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_qurao69",
      "template_d4pgs4m",
      this
    )
    .then(() => {
      alert("Message sent successfully ✅");
      contactForm.reset();
    })
    .catch((error) => {
      alert("Failed to send message ❌");
      console.error("EmailJS Error:", error);
    });
  });
}

/* =========================
   SOCIAL ICON HOVER
========================= */
const socialIcons = document.querySelectorAll(".social-links-contact a");
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-5px) scale(1.2)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0) scale(1)";
  });
});

/* =========================
   DOM READY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* Fade-in animation */
  const fadeElements = document.querySelectorAll(".fade-in-element");
  fadeElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, i * 150);
  });

  /* Page fade navigation */
  const links = document.querySelectorAll("a.fade-link[data-link]");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      document.body.classList.add("page-fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });

}); // ✅ THIS WAS MISSING


  /* =========================
     MOBILE MENU
  ========================= */
  const menuToggle = document.getElementById("menu-toggle");
  const slideMenu = document.getElementById("slide-menu");

  if (menuToggle && slideMenu) {
    menuToggle.addEventListener("click", () => {
      slideMenu.classList.toggle("active");
    });
  }

  /* =========================
     IMAGE POPUP MODAL
  ========================= */

const openModal = document.getElementById("openModal");
const modal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");

if (openModal && modal && closeModal) {

  const revealTexts = modal.querySelectorAll(".reveal");

  openModal.addEventListener("click", () => {
    modal.style.display = "flex";

    // reset animation
    revealTexts.forEach(el => el.classList.remove("show"));

    // reveal one by one
    revealTexts.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 400);
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

}
/* ===== CERTIFICATE IMAGE POPUP ===== */
const certImages = document.querySelectorAll(".cert-img");
const certModal = document.getElementById("certModal");
const certModalImg = document.getElementById("certModalImg");
const closeCert = document.getElementById("closeCert");

if (certImages && certModal) {
  certImages.forEach(img => {
    img.addEventListener("click", () => {
      certModal.style.display = "flex";
      certModalImg.src = img.src;
    });
  });

  closeCert.addEventListener("click", () => {
    certModal.style.display = "none";
  });

  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) {
      certModal.style.display = "none";
    }
  });
}


