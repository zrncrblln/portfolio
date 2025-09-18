// Constants and Variables
const burgerMenu = document.querySelector('.burger-menu');
const sidebar = document.getElementById('sidebar');
const filters = document.querySelectorAll('.portfolio-filters .filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.querySelector('.portfolio-modal');
const modalImg = document.querySelector('.portfolio-modal .modal-content');
const captionText = document.getElementById('caption');
const closeModal = document.querySelector('.portfolio-modal .close-modal');
const certificateItems = document.querySelectorAll('.portfolio-item[data-category="certificates"]');

// Event Listeners
document.addEventListener('DOMContentLoaded', init);

// Burger menu toggle
if (burgerMenu) {
  burgerMenu.addEventListener('click', toggleBurgerMenu);
}

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', handleSmoothScroll);
});

// Portfolio filtering
filters.forEach(filter => {
  filter.addEventListener('click', handlePortfolioFilter);
});

// Portfolio modal popup
certificateItems.forEach(item => {
  item.addEventListener('click', openModal);
});

if (closeModal) {
  closeModal.addEventListener('click', closeModalHandler);
}

// Contact form submission with Formspree
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('formspree:submit', function() {
    showNotification('Message sent successfully!', true);
    contactForm.reset();
  });
  contactForm.addEventListener('formspree:error', function() {
    showNotification('An error occurred while sending the message.', false);
  });
}

// Functions
function init() {
  // Initialize See More / See Less for service descriptions
  initServiceDescriptions();

  // Initialize typing animation
  initTypingAnimation();
}

function toggleBurgerMenu() {
  const expanded = burgerMenu.getAttribute('aria-expanded') === 'true' || false;
  burgerMenu.setAttribute('aria-expanded', !expanded);
  sidebar.classList.toggle('sidebar-open');
  burgerMenu.classList.toggle('open');
}

function handleSmoothScroll(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function handlePortfolioFilter(e) {
  e.preventDefault();
  filters.forEach(f => f.classList.remove('active'));
  this.classList.add('active');
  const filterValue = this.getAttribute('data-filter');

  portfolioItems.forEach(item => {
    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function initServiceDescriptions() {
  const maxLength = 150;
  const serviceDescriptions = document.querySelectorAll('.service-description');

  serviceDescriptions.forEach(desc => {
    const fullText = desc.textContent.trim();
    if (fullText.length > maxLength) {
      const truncatedText = fullText.slice(0, maxLength) + '...';
      desc.dataset.fullText = fullText;
      desc.textContent = truncatedText;

      const seeMoreLink = desc.nextElementSibling;
      if (seeMoreLink && seeMoreLink.classList.contains('see-more')) {
        seeMoreLink.style.display = 'inline';
        seeMoreLink.textContent = 'See more...';

        seeMoreLink.addEventListener('click', function (e) {
          e.preventDefault();
          if (desc.textContent.endsWith('...')) {
            desc.textContent = desc.dataset.fullText;
            seeMoreLink.textContent = 'See less';
          } else {
            desc.textContent = truncatedText;
            seeMoreLink.textContent = 'See more...';
          }
        });
      }
    } else {
      const seeMoreLink = desc.nextElementSibling;
      if (seeMoreLink && seeMoreLink.classList.contains('see-more')) {
        seeMoreLink.style.display = 'none';
      }
    }
  });
}

function openModal() {
  modal.style.display = 'block';
  modalImg.src = this.querySelector('img').src;
  captionText.textContent = this.querySelector('img').alt;
}

function closeModalHandler() {
  modal.style.display = 'none';
}

function initTypingAnimation() {
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
}



function showNotification(message, success) {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.style.backgroundColor = success ? '#4CAF50' : '#f44336';
    notification.style.display = 'block';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 5000);
  }
}
