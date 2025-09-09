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
    let duration = 1000; // fade duration in ms

    function fadeOutIn(element, newText) {
        element.classList.add('fade-out');
        setTimeout(() => {
            element.textContent = newText;
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }, duration);
        setTimeout(() => {
            element.classList.remove('fade-in');
        }, duration * 4);
    }

    setInterval(() => {
        index = (index + 1) % texts.length;
        fadeOutIn(toggleTitle, texts[index]);
    }, duration * 4);
});



class InfiniteCertificateCarousel {
    constructor() {
        this.carousel = document.querySelector('.certificates-carousel');
        this.cards = document.querySelectorAll('.certificate-card');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');

        this.totalCards = this.cards.length;
        this.originalCards = 5; // Number of original unique cards
        this.currentIndex = 0;
        this.cardWidth = 0;
        this.autoScrollInterval = null;
        this.isTransitioning = false;

        this.init();
    }

    init() {
        this.calculateCardWidth();
        this.setupEventListeners();
        this.startAutoScroll();
        this.updateFadeEffect();

        // Handle window resize
        window.addEventListener('resize', () => {
            this.calculateCardWidth();
            this.updatePosition(false);
        });
    }

    calculateCardWidth() {
        if (this.cards.length > 0) {
            const cardRect = this.cards[0].getBoundingClientRect();
            const gap = 30; // Gap between cards
            this.cardWidth = cardRect.width + gap;
        }
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Pause auto-scroll on hover
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoScroll());
        this.carousel.addEventListener('mouseleave', () => this.startAutoScroll());

        // Handle touch/drag scrolling
        let isDragging = false;
        let startX = 0;
        let startScrollLeft = 0;

        this.carousel.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            startScrollLeft = this.currentIndex;
            this.carousel.style.cursor = 'grabbing';
            this.pauseAutoScroll();
        });

        this.carousel.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const walk = (startX - e.pageX) / this.cardWidth;
            const newIndex = startScrollLeft + walk;
            this.updatePosition(false, newIndex * this.cardWidth);
        });

        this.carousel.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                this.carousel.style.cursor = 'grab';
                this.startAutoScroll();
                this.snapToNearest();
            }
        });

        this.carousel.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                this.carousel.style.cursor = 'grab';
                this.startAutoScroll();
                this.snapToNearest();
            }
        });
    }

    snapToNearest() {
        const currentTransform = this.carousel.style.transform;
        const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)) : 0;
        const newIndex = Math.round(Math.abs(currentX) / this.cardWidth);
        this.currentIndex = newIndex;
        this.updatePosition(true);
    }

    next() {
        if (this.isTransitioning) return;
        this.currentIndex++;
        this.updatePosition(true);
    }

    prev() {
        if (this.isTransitioning) return;
        this.currentIndex--;
        this.updatePosition(true);
    }

    updatePosition(animate = true, customOffset = null) {
        if (animate) {
            this.isTransitioning = true;
            this.carousel.style.transition = 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        } else {
            this.carousel.style.transition = 'none';
        }

        const offset = customOffset !== null ? customOffset : this.currentIndex * this.cardWidth;
        this.carousel.style.transform = `translateX(-${offset}px)`;

        if (animate) {
            setTimeout(() => {
                this.isTransitioning = false;
                this.handleInfiniteLoop();
            }, 800);
        }

        this.updateFadeEffect();
    }

    handleInfiniteLoop() {
        // Reset position for infinite loop
        if (this.currentIndex >= this.originalCards * 2) {
            this.currentIndex = this.originalCards;
            this.carousel.style.transition = 'none';
            this.carousel.style.transform = `translateX(-${this.currentIndex * this.cardWidth}px)`;
        } else if (this.currentIndex < this.originalCards) {
            this.currentIndex = this.originalCards * 2 - 1;
            this.carousel.style.transition = 'none';
            this.carousel.style.transform = `translateX(-${this.currentIndex * this.cardWidth}px)`;
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InfiniteCertificateCarousel();
});