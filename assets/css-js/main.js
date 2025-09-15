// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.getElementById('sidebar');

burgerMenu.addEventListener('click', () => {
  const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
  burgerMenu.setAttribute('aria-expanded', !expanded);
  sidebar.classList.toggle('sidebar-open');
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Portfolio filtering
const filters = document.querySelectorAll('.portfolio-filters .filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    const filterValue = filter.textContent.toLowerCase();

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Portfolio modal popup
const modal = document.querySelector('.portfolio-modal');
const modalImg = document.querySelector('.portfolio-modal .modal-content');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.portfolio-modal .close-modal');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = item.querySelector('img').src;
    captionText.textContent = item.querySelector('img').alt;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Typing animation for hero highlight text
document.addEventListener('DOMContentLoaded', () => {
  const highlight = document.querySelector('.highlight');
  if (!highlight) return;

  const phrases = ['Web Developer', 'Computer Engineer'];
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const pauseTime = 2000;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
      currentCharIndex--;
      highlight.textContent = currentPhrase.substring(0, currentCharIndex);
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(type, typingSpeed / 2);
      }
    } else {
      currentCharIndex++;
      highlight.textContent = currentPhrase.substring(0, currentCharIndex);
      if (currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  }

  type();
});
