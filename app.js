const message = 'Olá! Analisei a proposta comercial de marketing para a PHOS Energia e gostaria de conversar sobre os detalhes e os próximos passos.';
const whatsapp = `https://wa.me/5561994624993?text=${encodeURIComponent(message)}`;

document.querySelectorAll('a.wa').forEach((link) => {
  link.href = whatsapp;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelector('#print-link').addEventListener('click', (event) => {
  event.preventDefault();
  window.print();
});
