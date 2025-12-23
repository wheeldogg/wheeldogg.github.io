import Alpine from "alpinejs";

// Make Alpine available globally
window.Alpine = Alpine;

// Initialize Alpine stores and components
document.addEventListener("DOMContentLoaded", () => {
  // Navigation store for mobile menu
  Alpine.store("nav", {
    isOpen: false,
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  });

  // Theme store (for potential light/dark toggle)
  Alpine.store("theme", {
    dark: true,
    toggle() {
      this.dark = !this.dark;
      document.documentElement.classList.toggle("dark", this.dark);
    },
  });

  // Gallery lightbox component
  Alpine.data("lightbox", () => ({
    isOpen: false,
    currentImage: null,
    open(src, alt) {
      this.currentImage = { src, alt };
      this.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    close() {
      this.isOpen = false;
      this.currentImage = null;
      document.body.style.overflow = "";
    },
  }));

  // Start Alpine
  Alpine.start();
});
