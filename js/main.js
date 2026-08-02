(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  function setMenuState(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("is-open", open);
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenuState(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenuState(false);
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setMenuState(false);
      toggle.focus();
    }
  });

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var sections = document.querySelectorAll("section[id]");
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
