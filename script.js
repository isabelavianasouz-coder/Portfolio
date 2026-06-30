// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove('visible');
  }
});

// ===== MENU MOBILE =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
});

// Fecha o menu mobile ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuBtn.textContent = '☰';
  });
});

// ===== BOTÃO VOLTAR AO TOPO =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Aqui você pode integrar com EmailJS, Formspree, ou outro serviço de envio.
  // Por enquanto, apenas simula o envio:

  formFeedback.className = 'success';
  formFeedback.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';

  contactForm.reset();

  setTimeout(() => {
    formFeedback.textContent = '';
    formFeedback.className = '';
  }, 5000);
});