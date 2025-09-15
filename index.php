<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio</title>
    <link rel="stylesheet" href="assets/css-js/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <?php include 'assets/includes/sidebar.php'; ?>

    <main class="container">
        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <h1>Zoren Corbillon</h1>
                <p>I'm a <span class="highlight">Web Developer</span></p>
            </div>
        </section>

        <!-- About Section -->
        <section class="about" id="about">
            <h2>About</h2>
            <p>Hello! I’m Zoren A. Corbillon, a Computer Engineering graduate from Wesleyan University-Philippines with
                a strong passion for software development and problem-solving through technology. My academic
                background, complemented by certifications in programming, data analytics, cybersecurity, and ethical
                hacking, has
                equipped me with the skills to design, build, and enhance software solutions. I bring creativity,
                adaptability, and a proactive mindset to every project and thrive in collaborative environments. I’m
                eager to pursue opportunities as a Software Engineer, Computer Programmer, or related roles, where I can
                apply my skills to create real-world impact.</p>
            <div class="about-content">
                <img src="assets/images/zz.JPG" alt="Zoren Corbillon" class="about-image">
                <div class="about-details">
                    <h3>UI/UX Designer & Web Developer.</h3>
                    <p><em> Transforming ideas into secure, modern, and visually stunning digital experiences.</em></p>
                    <div class="about-info">
                        <div>
                            <p><strong>Birthday:</strong> 15 June 2003</p>
                            <p><strong>Website:</strong> www.example.com</p>
                            <p><strong>Phone:</strong> +63 9166 1000 257</p>
                            <p><strong>City:</strong> Rizal, Nueva Ecija, Philippines</p>
                        </div>
                        <div>
                            <p><strong>Age:</strong> 22</p>
                            <p><strong>Degree:</strong>Bachelor Degree Holder</p>
                            <p><strong>Email:</strong> zorencorbillon@gmail.com</p>
                        </div>
                    </div>
                    <p>Dedicated to delivering high-quality work and continuously improving my skills. I am committed to
                        creating innovative and efficient software solutions that meet user needs and business goals.
                    </p>
                </div>
            </div>
        </section>

        <!-- Resume Section -->
        <section class="resume" id="resume">
            <h2>Resume</h2>
            <p>Explore my professional journey and qualifications. This section highlights my educational background,
                work experience, and technical skills that demonstrate my commitment to excellence in software
                development
                and problem-solving.</p>

            <div class="resume-content">
                <div class="summary">
                    <h3>Summary</h3>
                    <p><strong>Zoren A. Corbillon</strong></p>
                    <p><em>Computer Engineering graduate with a passion for software development and problem-solving
                            through technology.</em></p>
                    <ul>
                        <li>Wesleyan University-Philippines</li>
                        <li>+123 456 7890</li>
                        <li>zoren@example.com</li>
                    </ul>
                </div>
                <div class="professional-experience">
                    <h3>Professional Experience</h3>
                    <p><strong>Software Developer</strong></p>
                    <p><strong>2025 - Present</strong></p>
                    <p><em>Fulltime, Remote</em></p>
                    <ul>
                        <li>Design, build, and enhance software solutions</li>
                        <li>Collaborate on projects to create real-world impact</li>
                        <li>Apply skills in programming, data analytics, cybersecurity, and ethical hacking</li>
                    </ul>
                </div>
            </div>

            <div class="education">
                <h3>Education</h3>
                <p><strong>Bachelor of Science in Computer Engineering</strong></p>
                <p><strong>2013 - 2017</strong></p>
                <p>Wesleyan University-Philippines</p>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section class="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <p>Showcasing my creative work and technical projects. Browse through my portfolio to see examples of
                applications, products, branding designs, and other creative endeavors that demonstrate my skills
                and passion for innovative solutions.</p>

            <div class="portfolio-filters">
                <a href="#" class="filter active" data-filter="all">ALL</a>
                <a href="#" class="filter" data-filter="app">APP</a>
                <a href="#" class="filter" data-filter="product">PRODUCT</a>
                <a href="#" class="filter" data-filter="branding">BRANDING</a>
                <a href="#" class="filter" data-filter="books">BOOKS</a>
            </div>

            <div class="portfolio-items">
                <div class="portfolio-item" data-category="app">
                    <img src="assets/images/portfolio-1.jpg" alt="Portfolio Item 1" class="portfolio-img">
                </div>
                <div class="portfolio-item" data-category="product">
                    <img src="assets/images/portfolio-2.jpg" alt="Portfolio Item 2" class="portfolio-img">
                </div>
                <div class="portfolio-item" data-category="branding">
                    <img src="assets/images/portfolio-3.jpg" alt="Portfolio Item 3" class="portfolio-img">
                </div>
                <div class="portfolio-item" data-category="app">
                    <img src="assets/images/portfolio-4.jpg" alt="Portfolio Item 4" class="portfolio-img">
                </div>
                <div class="portfolio-item" data-category="books">
                    <img src="assets/images/portfolio-5.jpg" alt="Portfolio Item 5" class="portfolio-img">
                </div>
                <div class="portfolio-item" data-category="product">
                    <img src="assets/images/portfolio-6.jpg" alt="Portfolio Item 6" class="portfolio-img">
                </div>
            </div>

            <!-- Modal for portfolio image -->
            <div id="portfolio-modal" class="portfolio-modal">
                <span class="close-modal">&times;</span>
                <img class="modal-content" id="modal-img" alt="Portfolio Image">
                <div id="caption"></div>
            </div>
        </section>

        <!-- Inlined Services Section -->
        <section class="services" id="services">
            <h1>Services</h1>
            <p>Offering a range of professional services to help bring your ideas to life. From web development and
                UI/UX design
                to software solutions and technical consulting, I provide high-quality services tailored to meet your
                specific needs.</p>

            <div class="services-list">
                <div class="service-item">
                    <h3>Web Development</h3>
                    <p>Creating responsive, modern websites and web applications using the latest technologies and best
                        practices to deliver exceptional user experiences.</p>
                </div>
                <div class="service-item">
                    <h3>UI/UX Design</h3>
                    <p>Designing intuitive and visually appealing user interfaces with a focus on user experience,
                        ensuring seamless interaction and engagement.</p>
                </div>
                <div class="service-item">
                    <h3>Software Solutions</h3>
                    <p>Developing custom software solutions tailored to your business needs, from desktop applications
                        to complex enterprise systems.</p>
                </div>
                <div class="service-item">
                    <h3>Technical Consulting</h3>
                    <p>Providing expert advice on technology stack selection, architecture design, and implementation
                        strategies for your projects.</p>
                </div>
                <div class="service-item">
                    <h3>Data Analytics</h3>
                    <p>Transforming raw data into actionable insights through advanced analytics, visualization, and
                        reporting solutions.</p>
                </div>
                <div class="service-item">
                    <h3>Cybersecurity</h3>
                    <p>Implementing robust security measures and best practices to protect your digital assets and
                        ensure data integrity.</p>
                </div>
            </div>
        </section>

        <!-- Inlined Contact Section -->
        <section class="contact" id="contact">
            <h1>Contact</h1>
            <div class="contact-wrapper">
                <div class="contact-left">
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="icon address-icon"></div>
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div class="contact-item">
                            <div class="icon phone-icon"></div>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                        <div class="contact-item">
                            <div class="icon email-icon"></div>
                            <h3>Email Us</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div class="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890123!2d-74.006015284593!3d40.71277577933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f1f1f1f%3A0x123456789abcdef!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>

                <div class="contact-right">
                    <form class="contact-form" action="#" method="post">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div class="form-group full-width">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div class="form-group full-width">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        <?php include 'assets/includes/footer.php'; ?>
    </main>
    <script src="assets/css-js/main.js"></script>
</body>

</html>