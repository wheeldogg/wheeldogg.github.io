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

  // Theme store with localStorage persistence and system preference
  Alpine.store("theme", {
    dark: document.documentElement.classList.contains("dark"),

    init() {
      // Listen for system preference changes (when no saved preference)
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.dark = e.matches;
          document.documentElement.classList.toggle("dark", this.dark);
        }
      });
    },

    toggle() {
      this.dark = !this.dark;
      document.documentElement.classList.toggle("dark", this.dark);
      localStorage.setItem("theme", this.dark ? "dark" : "light");
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
