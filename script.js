


document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;

  // Safety check
  if (!themeToggle) {
    console.warn("themeToggle button not found");
    return;
  }

  // Load saved theme or default to dark
  const currentTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", currentTheme);

  themeToggle.addEventListener("click", () => {
    const theme = html.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Experience Toggle
  window.toggleExperience = function (header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains("active");

    document.querySelectorAll(".exp-header").forEach(h => {
      h.classList.remove("active");
      h.nextElementSibling?.classList.remove("active");
    });

    if (!isActive) {
      header.classList.add("active");
      content.classList.add("active");
    }
  };

  // CTA Button (safe)
  const ctaBtn = document.querySelector(".cta-button");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Open for work! Contact me for opportunities.");
    });
  }

});
