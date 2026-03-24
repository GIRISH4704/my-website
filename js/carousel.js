(function () {
  const track = document.getElementById("testimonials-track");
  const dots = document.querySelectorAll(".t-dot");
  const prevBtn = document.getElementById("t-prev");
  const nextBtn = document.getElementById("t-next");

  const total = dots.length;
  let current = 0;
  let timer = null;
  const DURATION = 6000;

  // ── Core: slide the track to a position ───────────────────
  function goTo(index) {
    current = (index + total) % total;

    track.style.transform = `translateX(calc(-${current} * 100% - ${current} * 1.5rem))`;

    dots.forEach((d, i) => d.classList.toggle("active", i === current));
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

  // ── Touch / swipe ──────────────────────────────────────────
  let touchStartX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].clientX;
    },
    { passive: true },
  );

  track.addEventListener(
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
  track.addEventListener("mouseenter", () => clearInterval(timer));
  track.addEventListener("mouseleave", () => startTimer());

  // ── Start ──────────────────────────────────────────────────
  startTimer();
})();
