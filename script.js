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

// Counter Animation
(function() {
  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '+';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
      current += step;
      if (current < target) {
        el.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    };
    update();
  }

  function checkCounters() {
    const statsSection = document.querySelector('.team-banner');
    if (!statsSection || started) return;
    
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      started = true;
      counters.forEach(counter => animateCounter(counter));
    }
  }

  window.addEventListener('scroll', checkCounters);
  window.addEventListener('load', function() {
    setTimeout(checkCounters, 100);
  });
  checkCounters();
})();

// Scroll Reveal Animation
(function() {
  function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', reveal);
  reveal();
})();