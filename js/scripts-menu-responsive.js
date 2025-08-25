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


// === Cambia la clase del navbar al hacer scroll (para fondo y sombra) === // 
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


// ===========QUITA EL BOTÓN DE "ABRIR-GALERÍA"==================== // 

const openBtn = document.querySelector('[data-bs-target="#fullscreenModal"]');
const galleryModal = document.getElementById('fullscreenModal');

// Cuando se abre el modal
galleryModal.addEventListener('show.bs.modal', () => {
  openBtn.style.display = 'none';
});

// Cuando se cierra el modal
galleryModal.addEventListener('hidden.bs.modal', () => {
  openBtn.style.display = 'block';
});
