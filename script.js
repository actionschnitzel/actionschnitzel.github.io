document.getElementById("year").textContent = new Date().getFullYear();

// Burger Menu Functionality
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");
const dropdowns = document.querySelectorAll(".nav-item-dropdown");

if (burgerMenu) {
  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      // Don't close if clicking on dropdown toggle
      if (!link.nextElementSibling?.classList.contains("dropdown-menu")) {
        navLinks.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    });
  });

  // Handle dropdown menus on mobile
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector("a");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        menu.classList.toggle("active");
        dropdown.classList.toggle("active");
      }
    });
  });

  // Close menu when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
      burgerMenu.classList.remove("active");
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove("active");
        dropdown.querySelector(".dropdown-menu").classList.remove("active");
      });
    }
  });
}

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
