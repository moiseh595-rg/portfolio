const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const menuClose = document.querySelector(".menu-close");
const pagePath = window.location.pathname.split("/").pop() || "index.html";

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true },
);

// Mark the current page in the desktop and mobile navigation.
document
  .querySelectorAll(".desktop-nav a, .mobile-menu nav a")
  .forEach((link) => {
    const href = link.getAttribute("href") || "";
    const target = href.split("/").pop();
    if (target === pagePath || (pagePath === "" && target === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });

function setMenuState(open) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  const french = document.documentElement.lang === "fr";
  menuToggle.setAttribute("aria-label", open ? (french ? "Fermer le menu" : "Close menu") : (french ? "Ouvrir le menu" : "Open menu"));
  document.body.style.overflow = open ? "hidden" : "";
}

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.contains("open");
  setMenuState(!isOpen);
});
menuClose?.addEventListener("click", () => setMenuState(false));
mobileMenu
  ?.querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenuState(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
    closeLightbox();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Lightweight image lightbox for authentic project screenshots.
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
let lightboxTrigger = null;

function openLightbox(image) {
  if (!lightbox || !lightboxImage) return;
  lightboxTrigger = image;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "Expanded project screenshot";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightbox.classList.contains("open")) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  if (!mobileMenu?.classList.contains("open"))
    document.body.style.overflow = "";
  lightboxTrigger?.focus();
  lightboxTrigger = null;
}

document.querySelectorAll("[data-lightbox]").forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || !lightbox.classList.contains("open")) return;
  event.preventDefault();
  lightboxClose?.focus();
});
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});


// Language UI state. The English and French pages share the same layout/CSS.
const currentLanguage = document.documentElement.lang || "en";
document.querySelectorAll("[data-lang]").forEach((link) => {
  if (link.dataset.lang === currentLanguage) {
    link.setAttribute("aria-current", "true");
  }
});


// Remember an explicit language choice from either language switcher.
// The preference is applied only when opening the main portfolio homepage.
document.querySelectorAll('a[data-lang="en"], a[data-lang="fr"]').forEach((link) => {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("portfolio-language", link.dataset.lang);
    } catch (error) {
      // Language links still work when browser storage is unavailable.
    }
  });
});
