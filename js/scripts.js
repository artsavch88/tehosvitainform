// меню
document.addEventListener('DOMContentLoaded', function () {

  // бургер-меню
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('main-menu');
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('#main-menu a').forEach(link => {
    link.addEventListener('click', function () {
      document.getElementById('main-menu').classList.add('hidden');
    });
  });

  // AOS (анімації при скролі)
  AOS.init({
    duration: 800, // тривалість анімації (мс)
    easing: 'ease-in-out', // плавність руху
    once: true // анімація запускається один раз
  });

  // feather icons
  feather.replace();

  // детальніше (розгортання/згортання)
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.toggle-details');
    if (!btn) return;

    const targetSel = btn.getAttribute('data-target');
    const panel = document.querySelector(targetSel);
    if (!panel) return;

    panel.classList.toggle('hidden');

    // оновити aria-стан
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    // обернути іконку
    const icon = btn.querySelector('svg');
    if (icon) icon.classList.toggle('rotate-180');
  });
});

// кнопка "вгору"
const scrollBtn = document.getElementById('scrollTopBtn');

// показати кнопку після прокрутки
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove('hidden');
  } else {
    scrollBtn.classList.add('hidden');
  }
});

// прокрутка догори
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
