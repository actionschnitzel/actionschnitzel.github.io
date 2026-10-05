document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("theme-toggle");

function updateToggleIcon() {
  const isLight = document.documentElement.classList.contains("theme-light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  themeToggle.setAttribute("aria-label", isLight ? "Dunkelmodus aktivieren" : "Hellmodus aktivieren");
}

if (themeToggle) {
  updateToggleIcon();
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("theme-light");
    localStorage.setItem("theme", document.documentElement.classList.contains("theme-light") ? "light" : "dark");
    updateToggleIcon();
  });
}

