(function () {
  const root = document.documentElement;
  const savedLang = localStorage.getItem("sskk-lang") || "en";
  const switcher = document.querySelector("[data-lang-toggle]");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");

  function applyLanguage(lang) {
    root.lang = lang;
    document.querySelectorAll("[data-i18n-en]").forEach((node) => {
      const text = node.getAttribute(`data-i18n-${lang}`);
      if (text) node.textContent = text;
    });
    document.querySelectorAll("[data-placeholder-en]").forEach((node) => {
      const text = node.getAttribute(`data-placeholder-${lang}`);
      if (text) node.setAttribute("placeholder", text);
    });
    if (switcher) switcher.textContent = lang === "en" ? "日本語" : "English";
    localStorage.setItem("sskk-lang", lang);
  }

  applyLanguage(savedLang);

  if (switcher) {
    switcher.addEventListener("click", () => {
      applyLanguage(root.lang === "en" ? "ja" : "en");
    });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }
})();
