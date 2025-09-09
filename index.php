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
            👋 Hi, I’m Zoren A. Corbillon, a Computer Engineering graduate passionate about technology, problem-solving,
            and continuous learning. During my internship at ASKI iSynergies, I gained practical experience in coding,
            debugging, database management, and system feature enhancements—contributing to the development of iSyn-app,
            an automation tool for inventory, sales, and data management.

            Alongside my academic background, I’ve strengthened my expertise through certifications in programming, data
            analytics, cybersecurity, ethical hacking, and data center operations. I thrive in collaborative
            environments and bring adaptability, creativity, and a proactive mindset to every project. I’m eager to grow
            and contribute in roles such as Computer Programmer, Software Engineer, Data Analyst, or Computer
            Technician, where I can apply my skills to deliver real-world impact.

            🌟 Let’s connect and explore how I can add value to your team!
        </p>
        <h3>Skills</h3>
        <ul>
            <li><i class="fas fa-code"></i> <strong>Programming Languages:</strong> HTML, CSS, JavaScript, Java, Python,
                PHP</li>
            <li><i class="fas fa-database"></i> <strong>Database Management:</strong> MySQL, SQL fundamentals,
                myPHPAdmin</li>
            <li><i class="fas fa-chart-bar"></i> <strong>Data Analytics:</strong> Data visualization & reporting, basic
                statistical analysis</li>
            <li><i class="fas fa-shield-alt"></i> <strong>Cybersecurity & Networking:</strong> Ethical hacking
                fundamentals, security best practices</li>
            <li><i class="fas fa-server"></i> <strong>IT & Systems:</strong> Data center operations, system
                troubleshooting, hardware/software maintenance</li>
            <li><i class="fas fa-users"></i> <strong>Soft Skills:</strong> Problem-solving, teamwork, adaptability,
                continuous learning mindset</li>
        </ul>
        <h3>Certificates</h3>
    </section>
    <section class="certificates-section">
        <button class="carousel-btn prev-btn" aria-label="Previous certificates">‹</button>
        <div class="certificates-carousel-wrapper">

            <div class="certificates-carousel">
                <!-- Original cards -->
                <div class="certificate-card">
                    <h4>Programming</h4>
                    <p>HTML, CSS, JavaScript, Java, Python</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Analytics</h4>
                    <p>Data visualization & reporting, basic statistical analysis</p>
                </div>
                <div class="certificate-card">
                    <h4>Cybersecurity & Ethical Hacking</h4>
                    <p>Ethical hacking fundamentals, security best practices</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Center Operations</h4>
                    <p>Data center operations, system troubleshooting, hardware/software maintenance</p>
                </div>
                <div class="certificate-card">
                    <h4>Additional Certificate</h4>
                    <p>Continuous learning and professional development</p>
                </div>
                <!-- Duplicate cards for infinite scroll -->
                <div class="certificate-card">
                    <h4>Programming</h4>
                    <p>HTML, CSS, JavaScript, Java, Python</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Analytics</h4>
                    <p>Data visualization & reporting, basic statistical analysis</p>
                </div>
                <div class="certificate-card">
                    <h4>Cybersecurity & Ethical Hacking</h4>
                    <p>Ethical hacking fundamentals, security best practices</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Center Operations</h4>
                    <p>Data center operations, system troubleshooting, hardware/software maintenance</p>
                </div>
                <div class="certificate-card">
                    <h4>Additional Certificate</h4>
                    <p>Continuous learning and professional development</p>
                </div>
                <!-- More duplicates for smooth infinite scroll -->
                <div class="certificate-card">
                    <h4>Programming</h4>
                    <p>HTML, CSS, JavaScript, Java, Python</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Analytics</h4>
                    <p>Data visualization & reporting, basic statistical analysis</p>
                </div>
                <div class="certificate-card">
                    <h4>Cybersecurity & Ethical Hacking</h4>
                    <p>Ethical hacking fundamentals, security best practices</p>
                </div>
                <div class="certificate-card">
                    <h4>Data Center Operations</h4>
                    <p>Data center operations, system troubleshooting, hardware/software maintenance</p>
                </div>
                <div class="certificate-card">
                    <h4>Additional Certificate</h4>
                    <p>Continuous learning and professional development</p>
                </div>
            </div>
        </div>
        <button class="carousel-btn next-btn" aria-label="Next certificates">›</button>
    </section>

    <!-- Projects Section -->
    <section class="projects-preview" id="projects">
        <h2 class="glow-heading">Featured <span class="accent">Projects</span></h2>
        <div class="projects-grid">
            <div class="project-card">
                <i class="fas fa-mobile-alt fa-2x accent-glow"></i>
                <h3>WU-P Pocket Guide 📱</h3>
                <p>The WU-P Pocket Guide Web App is a campus navigation and information system for students and guests
                    of Wesleyan University-Philippines (WU-P). It centralizes university announcements by pulling data
                    from various WU-P-related Facebook pages and provides a smart chatbot to assist users.</p>
                <a href="https://github.com/DOGEguy12/wup-pocket-guide.git" target="_blank" class="btn btn-small">See
                    More</a>
            </div>
            <div class="project-card">
                <i class="fas fa-store fa-2x accent-glow"></i>
                <h3>iSyn-App</h3>
                <p>iSyn-app is an automation tool for inventory, sales, and data management developed by iSynergies,
                    Inc., the IT subsidiary of ASKI (Alalay sa Kaunlaran, Inc.). The system streamlines organizational
                    processes by centralizing records, reducing manual work, and improving data accuracy for business
                    operations.</p>
                <a href="https://github.com/isynergiesinc/isyn-app.git" target="_blank" class="btn btn-small">See
                    More</a>
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