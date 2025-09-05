<?php include 'assets/includes/header.php'; ?>

<main class="container">
    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1 class="glow-heading">Unleashing the Power of <span class="accent">Web Development</span></h1>
            <p class="subtitle">
                Transforming ideas into secure, modern, and visually stunning digital experiences.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Projects</a>
                <a href="#about" class="btn btn-secondary">About Me</a>
            </div>
        </div>
        <div class="hero-image">
            <i class="fas fa-code fa-7x accent-glow"></i>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <h2 class="glow-heading">About <span class="accent">Me</span></h2>
        <p>
            I'm a passionate web developer with experience in building modern, responsive websites and web applications. I love turning ideas into reality using code.
        </p>
    </section>

    <!-- Projects Section -->
    <section class="projects-preview" id="projects">
        <h2 class="glow-heading">Featured <span class="accent">Projects</span></h2>
        <div class="projects-grid">
            <div class="project-card">
                <i class="fas fa-laptop-code fa-2x accent-glow"></i>
                <h3>Project One</h3>
                <p>Short description of your project goes here.</p>
                <a href="#" class="btn btn-small">See More</a>
            </div>
            <div class="project-card">
                <i class="fas fa-mobile-alt fa-2x accent-glow"></i>
                <h3>Project Two</h3>
                <p>Short description of your project goes here.</p>
                <a href="#" class="btn btn-small">See More</a>
            </div>
            <div class="project-card">
                <i class="fas fa-database fa-2x accent-glow"></i>
                <h3>Project Three</h3>
                <p>Short description of your project goes here.</p>
                <a href="#" class="btn btn-small">See More</a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <h2 class="glow-heading">Contact <span class="accent">Me</span></h2>
        <form class="contact-form">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </section>
</main>

<?php include 'assets/includes/footer.php'; ?>