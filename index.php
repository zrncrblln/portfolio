<?php include 'assets/includes/header.php'; ?>

<main class="container">
    <!-- Hero Section -->
    <section class="hero" id="home" style="margin-bottom: 50px">
        <div class="hero-content">
            <h1 class="glow-heading">👋Hi I'm Zoren a <span id="toggle-title" class="accent">Computer Engineer</span>
            </h1>
            <p class="subtitle">
                Transforming ideas into secure, modern, and visually stunning digital experiences.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Projects</a>
                <a href="#about" class="btn btn-secondary">About Me</a>
            </div>
        </div>
        <div>
            <img src="assets/images/zz.JPG" alt="img" class="hero-rect-img">
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <h2 class="glow-heading">About <span class="accent">Me</span></h2>
        <p>
            👋 Hi, I’m Zoren A. Corbillon, a Computer Engineering student passionate about technology, problem-solving,
            and continuous learning.

            I gained hands-on experience during my internship at ASKI iSynergies, where I worked on coding, debugging,
            database management, and enhancing system features—contributing to iSyn-app, an automation tool for
            inventory, sales, and data management.

            Alongside my studies, I’ve built a strong foundation with certifications in programming (HTML, CSS,
            JavaScript, Java, Python), data analytics, cybersecurity, ethical hacking, and data center operations.

            I’m eager to grow and contribute in roles such as Computer Programmer, Software Engineer, Data Analyst, or
            Computer Technician—bringing adaptability, teamwork, and a drive to take on new challenges.

            🌟 Let’s connect and explore how I can add value to your team!
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