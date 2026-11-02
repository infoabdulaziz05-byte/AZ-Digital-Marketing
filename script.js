const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const interest = formData.get('interest');
  const message = formData.get('message').trim();

  const text = [
    'Hello AZ Digital Marketing,',
    '',
    `My name is: ${name}`,
    `Email: ${email}`,
    `I'm interested in: ${interest}`,
    '',
    'Message:',
    message
  ].join('\\n');

  const whatsappUrl = `https://wa.me/923092805105?text=${encodeURIComponent(text)}`;
  document.getElementById('formStatus').textContent = 'Opening WhatsApp with your message. Please review and press Send there.';
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
