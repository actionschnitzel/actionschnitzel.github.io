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

// ProtonDB Ratings Loader
async function fetchProtonDBRatingsData() {
  try {
    const response = await fetch('protondb-games.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to load ProtonDB games data:', error);
    return null;
  }
}

function getRatingClass(rating) {
  const ratingLower = rating.toLowerCase();
  if (ratingLower === 'platinum') return 'platinum';
  if (ratingLower === 'gold') return 'gold';
  if (ratingLower === 'silver') return 'silver';
  if (ratingLower === 'bronze') return 'bronze';
  return 'unknown';
}

async function loadProtonDBRatings() {
  const gamesTable = document.querySelector('.games-table tbody');
  if (!gamesTable) return;

  // Lade die Spieldaten aus der JSON-Datei
  const data = await fetchProtonDBRatingsData();
  if (!data) {
    console.warn('ProtonDB games data could not be loaded');
    return;
  }

  // Erstelle ein Lookup-Object für schnellere Suche
  const gameMap = {};
  data.games.forEach(game => {
    gameMap[game.name] = game;
  });

  const rows = gamesTable.querySelectorAll('tr');
  
  rows.forEach(row => {
    const gameNameCell = row.querySelector('td:first-child');
    const ratingCell = row.querySelector('td:last-child');
    
    if (!gameNameCell || !ratingCell) return;

    const gameName = gameNameCell.textContent.trim();
    const gameData = gameMap[gameName];
    
    if (gameData) {
      const ratingClass = getRatingClass(gameData.rating);
      const protondbUrl = `https://www.protondb.com/app/${gameData.appId}`;
      ratingCell.innerHTML = `<span class="rating ${ratingClass}">${gameData.rating}</span> <a href="${protondbUrl}" target="_blank" class="protondb-link">Zu ProtonDB</a>`;
    }
  });
}

// Load ratings when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadProtonDBRatings);
} else {
  loadProtonDBRatings();
}
