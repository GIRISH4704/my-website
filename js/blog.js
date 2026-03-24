(function () {
  // ── Blog index: category filter ───────────────────────────
  const filterTabs = document.querySelectorAll("#blog-filter-tabs .filter-tab");
  const topicBtns = document.querySelectorAll(".topic-btn");
  const postCards = document.querySelectorAll(".blog-post-card");
  const featuredPost = document.querySelector(".blog-post-featured");
  const noResults = document.getElementById("blog-no-results");

  function applyBlogFilter(filter) {
    let visibleCount = 0;

    // Featured post
    if (featuredPost) {
      const match =
        filter === "all" || featuredPost.dataset.category === filter;
      featuredPost.style.display = match ? "" : "none";
      if (match) visibleCount++;
    }

    // Post cards
    postCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    // No results message
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }

    // Sync filter tabs
    filterTabs.forEach((t) =>
      t.classList.toggle("active", t.dataset.filter === filter),
    );

    // Sync sidebar topic buttons
    topicBtns.forEach((b) =>
      b.classList.toggle("active", b.dataset.filter === filter),
    );
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => applyBlogFilter(tab.dataset.filter));
  });

  topicBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      applyBlogFilter(btn.dataset.filter);
      // Scroll to posts area smoothly
      const grid = document.getElementById("blog-posts-grid");
      if (grid) {
        const offset = grid.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    });
  });

  // ── Newsletter form (blog index + post page) ──────────────
  document.querySelectorAll("#newsletter-form").forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const status = form.nextElementSibling;
      const btn = form.querySelector("button");

      if (!emailInput || !emailInput.value.trim()) return;

      btn.disabled = true;
      btn.textContent = "Subscribing...";

      // ── Replace with your real newsletter service later ──
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = "Subscribe";
        if (status) {
          status.textContent = "You are in! We will be in touch soon.";
          status.className = "widget-status success";
        }
        form.reset();
      }, 1000);
      // ────────────────────────────────────────────────────
    });
  });
})();
