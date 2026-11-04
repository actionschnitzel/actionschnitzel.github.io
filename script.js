document.getElementById("year").textContent = new Date().getFullYear();

// Burger Menu
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

const isMobileNav = () => window.innerWidth <= 768;

function setMenuOpen(open) {
  navLinks.classList.toggle("active", open);
  burgerMenu.classList.toggle("active", open);
  burgerMenu.setAttribute("aria-expanded", String(open));
}

if (burgerMenu) {
  burgerMenu.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("active"));
  });

  navLinks.querySelectorAll(".nav-item-dropdown > a").forEach(toggle => {
    toggle.addEventListener("click", (e) => e.preventDefault());
  });

  navLinks.querySelectorAll(".dropdown-submenu > .submenu-toggle").forEach(toggle => {
    toggle.addEventListener("click", (e) => e.preventDefault());
  });

  // Close the menu after following a real link
  navLinks.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", () => {
      if (isMobileNav() && link.getAttribute("href") !== "#") {
        setMenuOpen(false);
      }
    });
  });

  // Reset all mobile state when switching to desktop
  window.addEventListener("resize", () => {
    if (!isMobileNav()) {
      setMenuOpen(false);
      navLinks.querySelectorAll(".nav-item-dropdown.active, .dropdown-menu.active, .dropdown-submenu.active")
        .forEach(el => el.classList.remove("active"));
    }
  });
}

// Blink section heading when navigating to an anchor on the page
function blinkHeading(hash) {
  if (!hash || hash.length < 2) return;
  const heading = document.querySelector(`${hash} > h2`);
  if (!heading) return;
  heading.classList.remove("blink");
  void heading.offsetWidth;
  heading.classList.add("blink");
  heading.addEventListener("animationend", () => heading.classList.remove("blink"), { once: true });
}

document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener("click", () => blinkHeading(new URL(link.href).hash));
});

blinkHeading(window.location.hash);

// Dark Mode Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

// Function to update theme
function updateTheme(isDarkMode) {
  if (isDarkMode) {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
    if (sunIcon && moonIcon) {
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
    }
  } else {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
    if (sunIcon && moonIcon) {
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
    }
  }
}

// Check for saved preference or system preference
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  let isDarkMode = false;

  if (savedTheme) {
    // Use saved preference
    isDarkMode = savedTheme === "dark";
  } else {
    // Check system preference
    isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  updateTheme(isDarkMode);
}

// Initialize theme on page load
initTheme();

// Handle theme toggle button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDarkMode = html.classList.contains("dark-mode");
    const newTheme = isDarkMode ? "light" : "dark";
    
    localStorage.setItem("theme", newTheme);
    updateTheme(!isDarkMode);
  });
}

// Listen for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  // Only update if user hasn't set a preference
  if (!localStorage.getItem("theme")) {
    updateTheme(e.matches);
  }
});
