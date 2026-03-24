(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("slide-prev");
  const nextBtn = document.getElementById("slide-next");

  let current = 0;
  let timer = null;
  const DURATION = 5000; // milliseconds between auto-advances

  // ── Core: go to a specific slide ──────────────────────────
  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  // ── Auto-play ──────────────────────────────────────────────
  function startTimer() {
    timer = setInterval(() => goTo(current + 1), DURATION);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  // ── Arrow buttons ──────────────────────────────────────────
  prevBtn.addEventListener("click", () => {
    goTo(current - 1);
    resetTimer();
  });

  nextBtn.addEventListener("click", () => {
    goTo(current + 1);
    resetTimer();
  });

  // ── Dot buttons ────────────────────────────────────────────
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.dataset.index));
      resetTimer();
    });
  });

  // ── Touch / swipe support (mobile) ────────────────────────
  let touchStartX = 0;

  document.querySelector(".slideshow").addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );

  document.querySelector(".slideshow").addEventListener(
    "touchend",
    (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
        resetTimer();
      }
    },
    { passive: true },
  );

  // ── Pause on hover ─────────────────────────────────────────
  document.querySelector(".slideshow").addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  document.querySelector(".slideshow").addEventListener("mouseleave", () => {
    startTimer();
  });

  // ── Keyboard support ───────────────────────────────────────
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goTo(current - 1);
      resetTimer();
    }
    if (e.key === "ArrowRight") {
      goTo(current + 1);
      resetTimer();
    }
  });

  // ── Start ──────────────────────────────────────────────────
  startTimer();
})();
