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
    // ── Formspree submission ───────────────────────────────────
    fetch("https://formspree.io/f/maqlwpbj", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(contactForm),
    })
      .then((response) => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send message";

        if (response.ok) {
          formStatus.textContent =
            "Message sent! We will be in touch within one business day.";
          formStatus.className = "form-status success";
          contactForm.reset();
        } else {
          formStatus.textContent =
            "Something went wrong. Please email us directly.";
          formStatus.className = "form-status error";
        }
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send message";
        formStatus.textContent =
          "Could not send — please check your connection and try again.";
        formStatus.className = "form-status error";
      });
    // ── End Formspree block ────────────────────────────────────
    // ── End placeholder block ──────────────────────────────────
  });
}
// ===== PROBLEMS SECTION SCROLL ANIMATIONS =====
(function () {
  const problemItems = document.querySelectorAll(".problem-item");
  const solutionBlock = document.querySelector(".solution-block");

  if (!problemItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  // Observe each problem item with a staggered delay
  problemItems.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.15}s`;
    observer.observe(item);
  });

  // Solution block appears after all problems are visible
  if (solutionBlock) {
    const solutionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            solutionBlock.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    solutionObserver.observe(solutionBlock);
  }
})();
