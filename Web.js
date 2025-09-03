// Smooth scroll to section
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
  });
}

// Animate elements when scrolling
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    let pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});
