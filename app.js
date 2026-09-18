const message = 'Olá! Analisei a proposta comercial de marketing para a PHOS Energia e gostaria de conversar sobre os detalhes e os próximos passos.';
const whatsapp = `https://wa.me/5561994624993?text=${encodeURIComponent(message)}`;

document.querySelectorAll('a.wa').forEach((link) => {
  link.href = whatsapp;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('#print-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.print();
});

const navLinks = [...navigation.querySelectorAll('a')];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-25% 0px -65% 0px' });

navLinks.forEach((link) => {
  const section = document.querySelector(link.hash);
  if (section) observer.observe(section);
});
