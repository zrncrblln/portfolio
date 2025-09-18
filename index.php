<?php
// Include the email sending functionality
include 'assets/includes/send_email.php';

// Initialize variables for form handling
$message = '';
$success = false;

// Handle contact form submission via POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data with null coalescing for safety
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message_text = $_POST['message'] ?? '';

    // Send the contact email and get the result
    $result = sendContactEmail($name, $email, $subject, $message_text);
    $message = $result['message'];
    $success = $result['success'];
}
?>

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
                <h1>Hi! I'm Zoren Corbillon</h1>
                <p>A <span class="highlight">Web Developer</span></p>
            </div>
        </section>

        <!-- About Section -->
        <section class="about" id="about">
            <div class="section-container bg-white">
                <h2>About</h2>
                <p>Hello! I’m Zoren A. Corbillon, a Computer Engineering graduate from Wesleyan University-Philippines
                    with
                    a strong passion for software development and problem-solving through technology. My academic
                    background, complemented by certifications in programming, data analytics, cybersecurity, and
                    ethical
                    hacking, has
                    equipped me with the skills to design, build, and enhance software solutions. I bring creativity,
                    adaptability, and a proactive mindset to every project and thrive in collaborative environments. I’m
                    eager to pursue opportunities as a Software Engineer, Computer Programmer, or related roles, where I
                    can
                    apply my skills to create real-world impact.</p>
                <div class="about-content">
                    <img src="assets/images/zz.JPG" alt="Zoren Corbillon" class="about-image">
                    <div class="about-details">
                        <h3>Software Engineer & Web Developer.</h3>
                        <p><em> Transforming ideas into secure, modern, and visually stunning digital experiences.</em>
                        </p>
                        <div class="about-info">
                            <div>
                                <p><strong>Birthday:</strong> June 15, 2003</p>
                                <p><strong>Phone:</strong> +63 916 610 0257</p>
                                <p><strong>City:</strong> Rizal, Nueva Ecija, Philippines</p>
                            </div>
                            <div>
                                <p><strong>Age:</strong> 22</p>
                                <p><strong>Degree:</strong> BS major in Computer Engineering</p>
                                <p><strong>Email:</strong> zorencorbillon@gmail.com</p>
                            </div>
                        </div>
                        <p>Committed to building reliable, user-friendly, and scalable web solutions. I focus on
                            creating efficient websites, databases, and automation systems that help businesses improve
                            performance and achieve their goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Resume Section -->
        <div class="section resume-section" id="resume">
            <div class="section-container bg-white">
                <h2>Resume</h2>
                <p>Computer Engineering graduate with hands-on experience in web development, automation, and database
                    management. Skilled in PHP, Laravel, JavaScript, and MySQL, with proven contributions to projects
                    like the iSyn-app. Passionate about building scalable, user-friendly solutions and continuously
                    improving through collaboration and innovation.</p>
                <div class="row">
                    <div class="col-6">
                        <div class="summary timeline-item">
                            <h3>Summary</h3>
                            <p><strong>Zoren A. Corbillon</strong></p>
                            <p><em>I am a Computer Engineering graduate with hands-on experience in web development,
                                    database management, and system automation. Skilled in PHP, Laravel, JavaScript,
                                    MySQL,
                                    and Bootstrap, I have contributed to projects such as a School Management System and
                                    the
                                    iSyn-app automation tool. Beyond technical expertise, I bring strong
                                    problem-solving,
                                    adaptability, and collaboration skills, with a passion for creating scalable and
                                    user-friendly solutions.</em></p>
                            <ul>
                                <li>Wesleyan University-Philippines</li>
                                <li>+63 916 610 0257</li>
                                <li>zorencorbillon@gmail.com</li>
                            </ul>
                        </div>
                        <div class="education timeline-item">
                            <h3>Education</h3>
                            <p><strong>Bachelor of Science in Computer Engineering (2021 - 2025)</strong></p>
                            <p>Wesleyan University-Philippines</p>
                            <p><strong>Senior High School - STEM (2019 - 2021)</strong></p>
                            <p>Wesleyan University-Philippines</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="professional-experience timeline-item">
                            <h3>Professional Experience</h3>
                            <div class="experience-item">
                                <h4>Web Developer Intern</h4>
                                <p class="date">06/2024 - 08/2024</p>
                                <p class="location"><em>AKSI iSynergies, Cabanatuan City, Province of Nueva Ecija,
                                        Philippines</em></p>
                                <ul>
                                    <li>Collaborated with the development team on coding, debugging, testing, and
                                        database
                                        management, ensuring smoother system performance.</li>
                                    <li>Enhanced system functionality and improved user interface design, contributing
                                        to
                                        better usability and user experience.</li>
                                    <li>Actively supported the full development cycle, from troubleshooting issues to
                                        implementing small feature upgrades.</li>
                                </ul>
                            </div>
                            <div class="experience-item">
                                <h4>Project Highlight – iSyn-app</h4>
                                <p class="date">06/2024 - 08/2024</p>
                                <p class="location"><em>AKSI iSynergies</em></p>
                                <ul>
                                    <li>Contributed to the development of iSyn-app, an automation platform for managing
                                        inventory, sales, vouchers, and data.</li>
                                    <li>Assisted in coding, debugging, and feature enhancements, improving overall
                                        system
                                        performance and reliability.</li>
                                    <li>Collaborated on UI/UX improvements, ensuring a more intuitive and user-friendly
                                        interface.</li>
                                    <li>Supported database management and testing tasks to maintain data accuracy and
                                        system
                                        stability.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="assets/Corbillon, Zoren-CV.pdf" download class="btn btn-primary btn-cv"><i
                        class="fas fa-download"></i> Download CV</a>
        </div>
        </div>

        <!-- Portfolio Section -->
        <section class="portfolio" id="portfolio">
            <div class="section-container bg-white">
                <h2>Portfolio</h2>
                <p>Showcasing my certificates and skills. Browse through my certifications and technical proficiencies
                    that
                    demonstrate my expertise and passion for continuous learning.</p>

                <div class="portfolio-filters">
                    <a href="#" class="filter active" data-filter="all">ALL</a>
                    <a href="#" class="filter" data-filter="certificates">CERTIFICATES</a>
                    <a href="#" class="filter" data-filter="skills">SKILLS</a>
                </div>

                <div class="portfolio-items">
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c1.jpg"
                            alt="Certificate of Attendance – Marketing ME Live (Career Session)" class="portfolio-img">
                        <h3>Certificate of Attendance – Marketing ME Live (Career Session)</h3>
                        <p>Issuer: Jobs180.com, Inc.</p>
                        <p>Issued May 2025</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c2.jpg" alt="Professionalism (US English)" class="portfolio-img">
                        <h3>Professionalism (US English)</h3>
                        <p>Issuer: Wadhwani Foundation</p>
                        <p>Issued Apr 2025</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c3.jpg" alt="Start-up Mindset (US English)" class="portfolio-img">
                        <h3>Start-up Mindset (US English)</h3>
                        <p>Issuer: Wadhwani Foundation</p>
                        <p>Issued Apr 2025</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c4.jpg" alt="Certified Data Center Technician (CDCT)"
                            class="portfolio-img">
                        <h3>Certified Data Center Technician (CDCT)</h3>
                        <p>Issuer: East West International Educational Specialists, Inc.</p>
                        <p>Issued Nov 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c5.jpg" alt="Certified Ethical Hacker (CEH)" class="portfolio-img">
                        <h3>Certified Ethical Hacker (CEH)</h3>
                        <p>Issuer: Cisco</p>
                        <p>Issued Nov 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c6.jpg" alt="Python Essentials 1" class="portfolio-img">
                        <h3>Python Essentials 1</h3>
                        <p>Issuer: Cisco</p>
                        <p>Issued Nov 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c7.jpg" alt="Data Analytics Essentials" class="portfolio-img">
                        <h3>Data Analytics Essentials</h3>
                        <p>Issuer: Cisco</p>
                        <p>Issued Oct 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c8.jpg" alt="Introduction to Data Science" class="portfolio-img">
                        <h3>Introduction to Data Science</h3>
                        <p>Issuer: Cisco</p>
                        <p>Issued Oct 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c9.jpg" alt="Introduction to Cybersecurity" class="portfolio-img">
                        <h3>Introduction to Cybersecurity</h3>
                        <p>Issuer: Cisco</p>
                        <p>Issued May 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="certificates">
                        <img src="assets/images/c10.jpg"
                            alt="Certificate of Appreciation – General Assembly: Empowering Tomorrow"
                            class="portfolio-img">
                        <h3>Certificate of Appreciation – General Assembly: Empowering Tomorrow</h3>
                        <p>Issuer: Institute of Computer Engineers of the Philippines – Student Edition</p>
                        <p>Issued Jan 2024</p>
                    </div>
                    <div class="portfolio-item" data-category="skills">
                        <i class="fas fa-cogs"></i>
                        <h3>Technical Skills</h3>
                        <p>Ethical Hacking · Penetration Testing · Network Security · Vulnerability Assessment · Data
                            Analytics (SQL, Excel, Tableau) · Python Programming · Debugging · Web Development · Data
                            Science Basics · Server & Data Center Management</p>
                    </div>
                    <div class="portfolio-item" data-category="skills">
                        <i class="fas fa-user-tie"></i>
                        <h3>Professional Skills</h3>
                        <p>Career Development · Personal Branding · Public Speaking · Professional Networking · Business
                            Etiquette · Team Collaboration · Problem Solving · Strategic Planning · Creativity &
                            Innovation · Adaptability</p>
                    </div>
                </div>

                <!-- Modal for portfolio image -->
                <div id="portfolio-modal" class="portfolio-modal">
                    <span class="close-modal">&times;</span>
                    <img class="modal-content" id="modal-img" alt="Portfolio Image">
                    <div id="caption"></div>
                </div>
            </div>
        </section>

        <!-- Inlined Services Section -->
        <section class="services" id="services">
            <div class="section-container bg-white">
                <h2>Services</h2>
                <p>I provide web development, database management, and system automation services tailored for
                    businesses and individuals. From creating responsive websites to building efficient automation tools
                    and ensuring secure, data-driven solutions, I focus on delivering scalable and user-friendly systems
                    that help clients streamline operations and achieve their goals.</p>

                <div class="services-list">
                    <div class="service-item">
                        <i class="fas fa-code"></i>
                        <h3>Web Development & Design</h3>
                        <p class="service-description">Custom website development (PHP, Laravel, JavaScript, Bootstrap,
                            Node.js). Portfolio, business, and e-commerce websites. Responsive and mobile-friendly UI/UX
                            design. Website optimization (speed, SEO basics, usability improvements).</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-palette"></i>
                        <h3>UI/UX Design</h3>
                        <p class="service-description">Designing intuitive and visually appealing user interfaces with a
                            focus on user experience,
                            ensuring seamless interaction and engagement. Responsive and mobile-friendly designs.</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-cogs"></i>
                        <h3>System & Process Automation</h3>
                        <p class="service-description">Business process automation (like your iSyn-app project).
                            Inventory, sales, and voucher management system development. Workflow automation
                            (small-scale ERP-style solutions). API integration for third-party tools (REST API, Facebook
                            API, etc.).</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-user-tie"></i>
                        <h3>IT & Security Services</h3>
                        <p class="service-description">Cybersecurity assessment (basic vulnerability testing, CEH
                            fundamentals). Data protection strategies for small businesses. Ethical hacking basics &
                            vulnerability scanning. Secure coding practices in web applications. Version control setup
                            (Git/GitHub) and deployment assistance. Website hosting setup (XAMPP, InfinityFree, Netlify,
                            etc.). Troubleshooting and debugging existing systems. Consultation for startups (system
                            planning, scalability advice).</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-chart-bar"></i>
                        <h3>Data Analytics & Reporting</h3>
                        <p class="service-description">SQL-based data analysis and reporting. Data visualization (Excel,
                            Tableau). Business insights from sales, inventory, or system logs.</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                    <div class="service-item">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Cybersecurity</h3>
                        <p class="service-description">Implementing robust security measures and best practices to
                            protect your digital assets and
                            ensure data integrity. Cybersecurity assessment, ethical hacking, and secure coding.</p>
                        <a href="#" class="see-more">See more...</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Inlined Contact Section -->
        <section class="contact" id="contact">
            <div class="section-container bg-white">
                <h2>Contact</h2>
                <div class="contact-wrapper">
                    <div class="contact-left">
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon address-icon"></div>
                                <h3>Address</h3>
                                <p>Rizal, Nueva Ecija, Philippines 3127</p>
                            </div>
                            <div class="contact-item">
                                <div class="icon phone-icon"></div>
                                <h3>Message</h3>
                                <p>+63 916 610 0257</p>
                            </div>
                            <div class="contact-item">
                                <div class="icon email-icon"></div>
                                <h3>Email</h3>
                                <p>zorencorbillon@gmail.com</p>
                            </div>
                        </div>
                        <div class="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1234567890123!2d121.123456789!3d15.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c123456789ab%3A0x123456789abcdef!2sRizal%2C%20Nueva%20Ecija%2C%20Philippines!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                                width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </div>

                    <div class="contact-right">
                        <form class="contact-form" id="contactForm" action="" method="post"
                            onsubmit="return submitForm(event)">
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
                        <div id="notification"
                            style="display:none; position: fixed; top: 20px; right: 20px; background-color: #4CAF50; color: white; padding: 15px; border-radius: 5px; z-index: 1000; max-width: 300px; word-wrap: break-word;">
                        </div>
                    </div>
                </div>
        </section>
        <?php include 'assets/includes/footer.php'; ?>
    </main>
    <script src="assets/css-js/main.js"></script>
</body>

</html>