// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Back to top button
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backTop.classList.add('visible');
      } else {
        backTop.classList.remove('visible');
      }
    });
    backTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Price filter (on prijsaanvraag page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const priceCards = document.querySelectorAll('.price-card');
  if (filterBtns.length && priceCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.dataset.filter;
        priceCards.forEach(card => {
          if (filter === 'all' || card.dataset.brand === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
