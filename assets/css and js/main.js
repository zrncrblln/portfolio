document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
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
    link.addEventListener('mouseenter', function() {
        this.classList.add('nav-link-active');
    });
    link.addEventListener('mouseleave', function() {
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
