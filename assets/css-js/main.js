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

// Skills Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };

            try {
                const response = await fetch('assets/includes/send_email.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams(data)
                });

                const result = await response.json();

                if (result.success) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('Failed to send message: ' + result.message);
                }
            } catch (error) {
                alert('An error occurred while sending the message.');
                console.error('Error:', error);
            }
        });
    }
});


// Skill card zoom effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.transform = 'scale(0.7)'; // Smaller default scale to fit only icon
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.0)'; // Expand on hover
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(0.7)'; // Back to smaller
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.transform = 'scale(0.7)'; // Set initial smaller scale
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.0)'; // Expand on hover
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(0.7)'; // Back to smaller
    });
});

// Project preview update logic
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.projects-sidebar .project-card');
    const previewTitle = document.getElementById('preview-title');
    const previewDescription = document.getElementById('preview-description');
    const previewLink = document.getElementById('preview-link');

    const projectsData = [
        {
            title: 'WU-P Pocket Guide 📱',
            description: 'The WU-P Pocket Guide Web App is a campus navigation and information system for students and guests of Wesleyan University-Philippines (WU-P). It centralizes university announcements by pulling data from various WU-P-related Facebook pages and provides a smart chatbot to assist users.',
            link: 'https://github.com/DOGEguy12/wup-pocket-guide.git'
        },
        {
            title: 'iSyn-App',
            description: 'iSyn-app is an automation tool for inventory, sales, and data management developed by iSynergies, Inc., the IT subsidiary of ASKI (Alalay sa Kaunlaran, Inc.). The system streamlines organizational processes by centralizing records, reducing manual work, and improving data accuracy for business operations.',
            link: 'https://github.com/isynergiesinc/isyn-app.git'
        },
        {
            title: 'Project Three',
            description: 'Short description of your project goes here.',
            link: '#'
        }
    ];

    // Set first project card as selected initially
    if (projectCards.length > 0) {
        projectCards.forEach(c => c.classList.remove('selected'));
        projectCards[0].classList.add('selected');
        previewTitle.textContent = projectsData[0].title;
        previewDescription.textContent = projectsData[0].description;
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            projectCards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            card.classList.add('selected');

            const index = parseInt(card.getAttribute('data-index'));
            const project = projectsData[index];

            // Update preview panel
            previewTitle.textContent = project.title;
            previewDescription.textContent = project.description;
            // Removed previewLink updates since button removed
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.projects-sidebar .project-card');
    const previewTitle = document.getElementById('preview-title');
    const previewDescription = document.getElementById('preview-description');
    const previewLink = document.getElementById('preview-link');

    const projectsData = [
        {
            title: 'WU-P Pocket Guide 📱',
            description: 'The WU-P Pocket Guide Web App is a campus navigation and information system for students and guests of Wesleyan University-Philippines (WU-P). It centralizes university announcements by pulling data from various WU-P-related Facebook pages and provides a smart chatbot to assist users.',
            link: 'https://github.com/DOGEguy12/wup-pocket-guide.git'
        },
        {
            title: 'iSyn-App',
            description: 'iSyn-app is an automation tool for inventory, sales, and data management developed by iSynergies, Inc., the IT subsidiary of ASKI (Alalay sa Kaunlaran, Inc.). The system streamlines organizational processes by centralizing records, reducing manual work, and improving data accuracy for business operations.',
            link: 'https://github.com/isynergiesinc/isyn-app.git'
        },
        {
            title: 'WU-P Automate',
            description: 'WU-P Automate is a web-based automation system built with PHP, MySQL, Bootstrap 5, HTML, CSS, and JavaScript. It is designed to streamline workflows within the WU-P environment by reducing repetitive manual tasks and providing a structured, user-friendly interface. With a modular architecture and clean codebase, it ensures scalability, maintainability, and ease of integration for future enhancements.',
            link: 'https://github.com/zrncrblln/automate.git'
        }
    ];

    // Set first project card as selected initially
    if (projectCards.length > 0) {
        projectCards.forEach(c => c.classList.remove('selected'));
        projectCards[0].classList.add('selected');
        previewTitle.textContent = projectsData[0].title;
        previewDescription.textContent = projectsData[0].description;
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            projectCards.forEach(c => c.classList.remove('selected'));
            // Add selected class to clicked card
            card.classList.add('selected');

            const index = parseInt(card.getAttribute('data-index'));
            const project = projectsData[index];

            // Update preview panel
            previewTitle.textContent = project.title;
            previewDescription.textContent = project.description;
            // Removed previewLink updates since button removed
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CardCarouselLoop();
});
