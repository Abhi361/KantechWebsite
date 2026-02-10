// Basic interactive behavior: year and contact form stub
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle && navToggle.addEventListener('click', ()=>{
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

const form = document.getElementById('contactForm');
form && form.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thank you — message received (demo).');
  form.reset();
});