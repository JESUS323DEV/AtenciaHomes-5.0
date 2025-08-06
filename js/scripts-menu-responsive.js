// Cierra el menú hamburguesa al hacer clic en un enlace interno
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function () {
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});


// === Cambia la clase del navbar al hacer scroll (para fondo y sombra) ===
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});
// =============================== // 
  document.querySelectorAll("details").forEach(detail => {
    const icon = detail.querySelector("summary i");

    detail.addEventListener("toggle", () => {
      if (detail.open) {
        icon.classList.replace("bi-plus-lg", "bi-x-lg");
      } else {
        icon.classList.replace("bi-x-lg", "bi-plus-lg");
      }
    });
  });