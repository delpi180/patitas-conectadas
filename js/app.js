// =========================================================
// JS PRINCIPAL PARA PAPITAS CONECTADAS
// - Menú responsive (navbar)
// - Scroll suave a secciones
// - Mostrar/ocultar formulario en sección comparativa
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------------------
  // 1. NAVBAR: menú móvil (botón hamburguesa)
  // -----------------------------------------
  const toggle = document.querySelector(".navbar__toggle");
  const links = document.getElementById("navbarLinks");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("navbar__toggle--open");
      links.classList.toggle("navbar__links--open");
    });
  }

  // -----------------------------------------
  // 2. Scroll suave para los links del navbar
  // -----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        const offset = 70; // altura del navbar
        const top = el.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

        // Cerrar menú en móvil al hacer clic
        links?.classList.remove("navbar__links--open");
        toggle?.classList.remove("navbar__toggle--open");
      }
    });
  });

  // -----------------------------------------
  // 3. BOTÓN EN COMPARACIÓN: mostrar/ocultar formulario
  // -----------------------------------------
  const compareBtn = document.getElementById("compare-contact-btn");
  const compareForm = document.getElementById("compare-contact-form");

  if (compareBtn && compareForm) {
    compareBtn.addEventListener("click", () => {
      const isVisible = compareForm.classList.contains("compare-contact__form--visible");

      if (isVisible) {
        // Ocultar
        compareForm.classList.remove("compare-contact__form--visible");
        compareBtn.textContent = "📩 Quiero que me contacten";
      } else {
        // Mostrar
        compareForm.classList.add("compare-contact__form--visible");
        compareBtn.textContent = "❌ Ocultar formulario";
      }
    });
  }

  // -----------------------------------------
  // 4. (FUTURO) Aquí podemos agregar más JS
  //    para la demo interactiva, panel, etc.
  // -----------------------------------------
});

document.addEventListener("DOMContentLoaded", () => {
  const btnContact = document.getElementById("btn-open-contact");
  const contactPanel = document.getElementById("contact-panel");
  const contactForm = document.getElementById("contact-form-mvp");

  if (btnContact && contactPanel) {
    btnContact.addEventListener("click", () => {
      contactPanel.classList.add("contact-panel--open");
      contactPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "Gracias por tu interés 😺\n\nEn esta versión MVP solo simulamos el envío, pero en producción esto llegaría al equipo de PAPITAS CONECTADAS."
      );
      contactForm.reset();
    });
  }
});
