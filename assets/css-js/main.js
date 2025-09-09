document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        if (targetId === 'home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Highlight nav link on hover
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.classList.add('nav-link-active');
    });
    link.addEventListener('mouseleave', function () {
        this.classList.remove('nav-link-active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleTitle = document.getElementById('toggle-title');
    if (!toggleTitle) return;

    const texts = ['Computer Engineer', 'Web Developer'];
    let index = 0;
    const intervalDuration = 3000; // time between text changes

    function fadeOutIn(element, newText) {
        element.style.opacity = 0; // fade out

        setTimeout(() => {
            element.textContent = newText;
            element.style.opacity = 1; // fade in
        }, 500); // match with CSS transition duration
    }

    setInterval(() => {
        index = (index + 1) % texts.length;
        fadeOutIn(toggleTitle, texts[index]);
    }, intervalDuration);
});



class CardCarouselLoop {
    constructor() {
        this.wrapper = document.querySelector('.certificates-carousel-wrapper');
        this.carousel = document.querySelector('.certificates-carousel');
        this.cards = Array.from(this.carousel.querySelectorAll('.certificate-card'));
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');

        this.cardsPerPage = 3;
        this.currentPage = 0;

        this.cardWidth = 0;
        this.calculateCardWidth();
        window.addEventListener('resize', () => this.calculateCardWidth());

        this.renderPage(true); // initial render

        this.prevBtn.addEventListener('click', () => this.prevPage());
        this.nextBtn.addEventListener('click', () => this.nextPage());
    }

    calculateCardWidth() {
        if (this.cards.length > 0) {
            const style = window.getComputedStyle(this.cards[0]);
            const marginRight = parseFloat(style.marginRight) || 0;
            this.cardWidth = this.cards[0].getBoundingClientRect().width + marginRight;
            this.renderPage(true);
        }
    }

    renderPage(initial = false) {
        if (!initial) {
            // Fade out
            this.carousel.style.opacity = 0;
        }

        setTimeout(() => {
            // Clear carousel
            this.carousel.innerHTML = '';

            const startIndex = this.currentPage * this.cardsPerPage;
            const pageCards = [];

            for (let i = 0; i < this.cardsPerPage; i++) {
                const index = (startIndex + i) % this.cards.length;
                const clone = this.cards[index].cloneNode(true);
                pageCards.push(clone);
            }

            pageCards.forEach(card => this.carousel.appendChild(card));

            // Fade in
            this.carousel.style.opacity = 1;

            // Optional: reset transform (if needed)
            this.carousel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            this.carousel.style.transform = `translateX(0)`;
        }, initial ? 0 : 300); // wait for fade-out duration
    }

    nextPage() {
        this.currentPage++;
        if (this.currentPage >= Math.ceil(this.cards.length / this.cardsPerPage)) {
            this.currentPage = 0; // loop back
        }
        this.renderPage();
    }

    prevPage() {
        this.currentPage--;
        if (this.currentPage < 0) {
            this.currentPage = Math.floor(this.cards.length / this.cardsPerPage) - 1; // loop back
        }
        this.renderPage();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CardCarouselLoop();
});
