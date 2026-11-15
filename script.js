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

// Content tabs
const contentTabList = document.querySelector(".content-tabs");

if (contentTabList) {
  const tabs = Array.from(contentTabList.querySelectorAll('[role="tab"]'));

  function activateContentTab(tab, moveFocus) {
    tabs.forEach(candidate => {
      const selected = candidate === tab;
      candidate.setAttribute("aria-selected", String(selected));
      candidate.tabIndex = selected ? 0 : -1;
      document.getElementById(candidate.getAttribute("aria-controls")).hidden = !selected;
    });

    if (moveFocus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateContentTab(tab, false));
    tab.addEventListener("keydown", event => {
      let nextIndex;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;

      event.preventDefault();
      activateContentTab(tabs[nextIndex], true);
    });
  });

  function activateContentTabFromHash(hash) {
    const panelId = hash.slice(1);
    const tab = tabs.find(candidate => candidate.getAttribute("aria-controls") === panelId);
    if (tab) activateContentTab(tab, false);
  }

  document.querySelectorAll(".mobile-submenu-items a").forEach(link => {
    link.addEventListener("click", () => {
      const url = new URL(link.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
        activateContentTabFromHash(url.hash);
      }
    });
  });

  activateContentTabFromHash(window.location.hash);
  window.addEventListener("hashchange", () => activateContentTabFromHash(window.location.hash));
}

const gogSearch = document.getElementById("gogSearch");
if (gogSearch) {
  const rows = document.querySelectorAll("#gogTableBody tr");
  const count = document.getElementById("gogCount");

  gogSearch.addEventListener("input", () => {
    const query = gogSearch.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach(row => {
      const matches = row.textContent.toLowerCase().includes(query);
      row.hidden = !matches;
      if (matches) shown++;
    });
    count.textContent = shown;
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
