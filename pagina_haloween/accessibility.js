// Panel de Accesibilidad Simplificado
document.addEventListener("DOMContentLoaded", function () {
  let fontSize = 0; // 0=normal, 1=grande, 2=mayor

  // Abrir/cerrar panel
  document.getElementById("accessibilityToggle").onclick = function () {
    const panel = document.getElementById("accessibilityContent");
    const isOpen = panel.classList.toggle("show");
    this.setAttribute("aria-expanded", isOpen);
  };

  // Aumentar texto
  document.getElementById("increaseFont").onclick = function () {
    if (fontSize < 2) {
      fontSize++;
      document.body.classList.remove("large-text", "larger-text");
      if (fontSize === 1) document.body.classList.add("large-text");
      if (fontSize === 2) document.body.classList.add("larger-text");
    }
  };

  // Reducir texto
  document.getElementById("decreaseFont").onclick = function () {
    if (fontSize > 0) {
      fontSize--;
      document.body.classList.remove("large-text", "larger-text");
      if (fontSize === 1) document.body.classList.add("large-text");
    }
  };

  // Alto contraste
  document.getElementById("toggleContrast").onclick = function () {
    const active = document.body.classList.toggle("high-contrast");
    this.textContent = active ? "⚫⚪ Desactivar Contraste" : "⚫⚪ Alto Contraste";
  };

  // Fuente legible
  document.getElementById("toggleReadable").onclick = function () {
    const active = document.body.classList.toggle("readable-font");
    this.textContent = active ? "📖 Fuente Normal" : "📖 Fuente Legible";
  };

  // Restablecer todo
  document.getElementById("resetAccessibility").onclick = function () {
    fontSize = 0;
    document.body.className = "";
    document.getElementById("toggleContrast").textContent = "⚫⚪ Alto Contraste";
    document.getElementById("toggleReadable").textContent = "📖 Fuente Legible";
    alert("Opciones restablecidas");
  };

  // Cerrar con clic fuera o tecla ESC
  document.onclick = function (e) {
    if (!e.target.closest(".accessibility-panel")) {
      document.getElementById("accessibilityContent").classList.remove("show");
    }
  };

  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      document.getElementById("accessibilityContent").classList.remove("show");
    }
  };
});
