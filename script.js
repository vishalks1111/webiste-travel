// Smooth scroll to sections
document.querySelectorAll("a.nav-link").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Update active link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navbarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// learnmore button
document.querySelectorAll(".learn-more").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Learn more about our services on our dedicated page!");
    // Alternatively, you could redirect to a specific URL:
    // window.location.href = 'services.html';
  });
});


// Add hover effects to package cards
const packageCards = document.querySelectorAll(".package-card");
packageCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
  });
});

// Footer icons color change on hover
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#f1c40f";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#6c757d";
  });
});

// Animation effect using Typed.js
document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: [
      "Explore beautiful destinations with us!",
      "Enjoy a comfortable and affordable ride.",
      "Your journey, our priority!",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });
});


// Function to check if the banner is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the visible class to banner-text when it is scrolled into view
function handleScroll() {
  const bannerText = document.querySelector('.banner-text');
  console.log('Checking if banner is in viewport...');
  if (isInViewport(document.getElementById('banner'))) {
    console.log('Banner is in viewport, adding visible class');
    bannerText.classList.add('visible'); // Add the 'visible' class
  } else {
    console.log('Banner is not in viewport');
  }
}


// Listen to scroll events
window.addEventListener('scroll', handleScroll);

