document.addEventListener("DOMContentLoaded", () => {
  const roleButtons = document.querySelectorAll(".login-role-btn");
  const roleInput = document.getElementById("login-role-input");
  const form = document.getElementById("login-form");
  const errorBox = document.getElementById("login-error");

  // Cambiar rol visualmente
  roleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      roleButtons.forEach((b) => b.classList.remove("login-role--active"));
      btn.classList.add("login-role--active");
      roleInput.value = btn.getAttribute("data-role");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    errorBox.textContent = "";

    const role = roleInput.value;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // Credenciales simuladas
    const vetEmail = "vet@papitas.com";
    const vetPass = "123456";

    const ownerEmail = "dueno@papitas.com";
    const ownerPass = "123456";

    if (role === "vet") {
      if (email === vetEmail && password === vetPass) {
        localStorage.setItem("papitas-role", "vet");
        window.location.href = "vet-panel.html";
      } else {
        errorBox.textContent = "Credenciales de veterinaria inválidas.";
      }
    } else {
      if (email === ownerEmail && password === ownerPass) {
        localStorage.setItem("papitas-role", "owner");
        window.location.href = "owner-panel.html";
      } else {
        errorBox.textContent = "Credenciales de dueño inválidas.";
      }
    }
  });
});
