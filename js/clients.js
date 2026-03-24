(function () {
  const tabs = document.querySelectorAll(".filter-tab");
  const categories = document.querySelectorAll(".clients-category");

  // ── Count cards per category and show in badge ────────────
  categories.forEach((cat) => {
    const key = cat.dataset.category;
    const count = cat.querySelectorAll(".client-card").length;
    const badge = document.getElementById("count-" + key);
    if (badge)
      badge.textContent = count + " " + (count === 1 ? "client" : "clients");
  });

  // ── Filter logic ──────────────────────────────────────────
  function applyFilter(filter) {
    categories.forEach((cat) => {
      if (filter === "all" || cat.dataset.category === filter) {
        cat.classList.remove("hidden");
      } else {
        cat.classList.add("hidden");
      }
    });

    tabs.forEach((t) => {
      t.classList.toggle("active", t.dataset.filter === filter);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      applyFilter(tab.dataset.filter);

      // Smooth scroll to first visible category
      const first = document.querySelector(".clients-category:not(.hidden)");
      if (first) {
        const offset = first.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

  // ── Keyboard navigation on filter tabs ───────────────────
  tabs.forEach((tab, i) => {
    tab.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") tabs[(i + 1) % tabs.length].focus();
      if (e.key === "ArrowLeft")
        tabs[(i - 1 + tabs.length) % tabs.length].focus();
    });
  });
})();
