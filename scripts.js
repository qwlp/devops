document.addEventListener("DOMContentLoaded", function () {
  // Check if we're on the home page
  const isHomePage = document.querySelector(".header-image") !== null;

  if (isHomePage) {
    const sections = [".header-image", ".contact-section"];
    let currentIndex = 0;

    // Set initial active section
    document.querySelector(sections[currentIndex]).classList.add("active");

    // Function to switch sections
    function switchSection() {
      // Remove active class from current section
      document.querySelector(sections[currentIndex]).classList.remove("active");

      // Update index
      currentIndex = (currentIndex + 1) % sections.length;

      // Add active class to next section
      document.querySelector(sections[currentIndex]).classList.add("active");
    }

    // Switch sections every 7 seconds
    setInterval(switchSection, 7000);
  }

  // Mobile menu functionality - works on all pages
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector("nav");

  if (mobileMenuButton && nav) {
    mobileMenuButton.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent document click from immediately closing the menu
      nav.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !nav.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        nav.classList.remove("active");
      }
    });

    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  }
});
