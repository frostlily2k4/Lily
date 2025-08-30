// Contact form message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "✅ Thank you! Your message has been sent.";
  document.getElementById("formMessage").style.color = "green";
  this.reset();
});

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", function() {
    lightbox.style.display = "block";
    lightboxImg.src = this.src;
    captionText.innerText = this.alt;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Filter drawings by category
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    galleryItems.forEach(item => {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
