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

