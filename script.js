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

// Hero Slider
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const leftArrow = document.querySelector('.hero-arrow-left');
  const rightArrow = document.querySelector('.hero-arrow-right');
  let current = 0;
  let autoSlide;

  function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    autoSlide = setInterval(nextSlide, 5000);
  }
  function stopAuto() {
    clearInterval(autoSlide);
  }

  if (slides.length > 0) {
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { stopAuto(); showSlide(i); startAuto(); });
    });
    leftArrow && leftArrow.addEventListener('click', () => { stopAuto(); prevSlide(); startAuto(); });
    rightArrow && rightArrow.addEventListener('click', () => { stopAuto(); nextSlide(); startAuto(); });
    startAuto();
  }
})();