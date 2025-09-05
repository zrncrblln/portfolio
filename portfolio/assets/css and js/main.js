// Smooth scroll for all anchor links with hashes (e.g., #about, #projects)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight nav link on hover
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('nav-link-active');
    });
    link.addEventListener('mouseleave', function() {
        this.classList.remove('nav-link-active');
    });
});