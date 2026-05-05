document.addEventListener("DOMContentLoaded", function() {
  const scrollBtn = document.getElementById("scrollUpBtn");

  // Listen for scrolls
  window.addEventListener("scroll", function() {
    // Show button when scrolled down some amount, hide otherwise
    if (window.scrollY > 200) {
      scrollBtn.classList.add("is-active");
    } else {
      scrollBtn.classList.remove("is-active");
    }
  });

  // Click to scroll to top
  scrollBtn.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
