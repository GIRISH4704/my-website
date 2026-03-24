// ===== NAVBAR: scroll shadow =====
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== NAVBAR: mobile toggle =====
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ===== NAVBAR: highlight active page =====
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  ".why-point, .stat-card, .service-card, .char-item, .testimonial-card",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));
// ===== FOOTER: auto year =====
const yearEl = document.getElementById("footer-year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== CONTACT FORM: validation + submit =====
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const subject = document.getElementById("cf-subject").value.trim();
    const message = document.getElementById("cf-message").value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.className = "form-status error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formStatus.textContent = "Please enter a valid email address.";
      formStatus.className = "form-status error";
      return;
    }

    // Disable button while "sending"
    const submitBtn = contactForm.querySelector(".form-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    // ── Replace this block with your real form service later ──
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
      formStatus.textContent =
        "Message sent! We will be in touch within one business day.";
      formStatus.className = "form-status success";
      contactForm.reset();
    }, 1200);
    // ── End placeholder block ──────────────────────────────────
  });
}
