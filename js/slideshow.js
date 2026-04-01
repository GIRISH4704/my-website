// ============================================
// FLASHCARD CAROUSEL — SLIDING INFINITE LOOP
// ============================================

(function () {
  const viewport = document.querySelector(".fc-viewport");
  const track = document.querySelector(".fc-track");
  const panels = Array.from(document.querySelectorAll(".fc-panel"));
  const dots = Array.from(document.querySelectorAll(".fc-dot"));
  const btnPrev = document.querySelector(".fc-arrow-left");
  const btnNext = document.querySelector(".fc-arrow-right");

  if (!track) return;

  const origCards = Array.from(track.querySelectorAll(".fc-card"));
  const total = origCards.length;
  const CARD_W = window.innerWidth <= 768 ? 260 : 380; // must match CSS flex-basis
  const GAP = 24;
  const STEP = CARD_W + GAP;

  let current = 0;
  let isMoving = false;
  let timer = null;

  // ── 1. Clone cards for infinite loop ──────
  // Prepend 2 clones of the end, append 2 clones of the start
  const CLONE_COUNT = 2;

  for (let i = 0; i < CLONE_COUNT; i++) {
    const cloneEnd = origCards[total - 1 - i].cloneNode(true);
    const cloneStart = origCards[i].cloneNode(true);
    cloneEnd.classList.add("fc-clone");
    cloneStart.classList.add("fc-clone");
    track.prepend(cloneEnd);
    track.appendChild(cloneStart);
  }

  const allCards = Array.from(track.querySelectorAll(".fc-card"));
  const offset = CLONE_COUNT; // index of real card[0] in allCards

  // ── 2. Position track so real card[0] is centred ──
  function centreOffset() {
    const vw = viewport.offsetWidth;
    return vw / 2 - CARD_W / 2;
  }

  function setTrackPos(pos, animate) {
    track.style.transition = animate
      ? "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)"
      : "none";
    track.style.transform = `translateX(${pos}px)`;
  }

  function posForCard(cardIndex) {
    // cardIndex = index in allCards
    return centreOffset() - cardIndex * STEP;
  }

  // ── 3. Update active styles ────────────────
  function updateCards(activeAllIdx) {
    allCards.forEach((card, i) => {
      card.classList.toggle("active", i === activeAllIdx);
    });
  }

  function updateMeta(realIdx) {
    panels.forEach((p) => p.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));
    panels[realIdx].classList.add("active");
    dots[realIdx].classList.add("active");
  }

  // ── 4. Go to a real card index ────────────
  function goTo(realIdx, animate = true) {
    if (isMoving) return;
    isMoving = true;

    // Wrap real index
    current = ((realIdx % total) + total) % total;

    const targetAllIdx = current + offset;
    setTrackPos(posForCard(targetAllIdx), animate);
    updateCards(targetAllIdx);
    updateMeta(current);

    setTimeout(() => {
      // After transition, silently jump if we're on a clone
      const pos = posForCard(targetAllIdx);

      // Check if we need to teleport (we're on a clone zone)
      if (targetAllIdx < offset) {
        // We slid left into prepended clones — jump to real equivalent
        const realEquiv = targetAllIdx + total;
        setTrackPos(posForCard(realEquiv), false);
        updateCards(realEquiv);
      } else if (targetAllIdx >= offset + total) {
        // We slid right into appended clones — jump to real equivalent
        const realEquiv = targetAllIdx - total;
        setTrackPos(posForCard(realEquiv), false);
        updateCards(realEquiv);
      }

      isMoving = false;
    }, 560);
  }

  // ── 5. Resize handler ─────────────────────
  function reposition() {
    setTrackPos(posForCard(current + offset), false);
  }

  window.addEventListener("resize", reposition);

  // ── 6. Timer ──────────────────────────────
  function startTimer() {
    stopTimer();
    timer = setInterval(() => goTo(current + 1), 4000);
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
  }

  // ── 7. Events ─────────────────────────────
  btnPrev.addEventListener("click", () => {
    goTo(current - 1);
    startTimer();
  });
  btnNext.addEventListener("click", () => {
    goTo(current + 1);
    startTimer();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.dataset.index));
      startTimer();
    });
  });

  origCards.forEach((card) => {
    card.addEventListener("click", () => {
      goTo(parseInt(card.dataset.index));
      startTimer();
    });
  });

  viewport.addEventListener("mouseenter", stopTimer);
  viewport.addEventListener("mouseleave", startTimer);

  // ── 8. Swipe support ──────────────────────
  let touchStartX = 0;
  viewport.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      stopTimer();
    },
    { passive: true },
  );

  viewport.addEventListener(
    "touchend",
    (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
      startTimer();
    },
    { passive: true },
  );

  // ── 9. Init ───────────────────────────────
  // Wait for layout to settle before positioning
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTrackPos(posForCard(offset), false);
      updateCards(offset);
      updateMeta(0);
      startTimer();
    });
  });
})();
