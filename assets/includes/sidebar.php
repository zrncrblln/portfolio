<link rel="stylesheet" href="assets/css-js/style.css" />
<button class="burger-menu" aria-label="Toggle sidebar" aria-expanded="false" aria-controls="sidebar">
  <span class="burger-bar"></span>
  <span class="burger-bar"></span>
  <span class="burger-bar"></span>
</button>
<aside class="sidebar" id="sidebar">
    <div class="sidebar-profile">
        <img src="assets/images/zz.JPG" alt="Profile Picture" class="profile-img">
        <h2 class="profile-name">Zoren Corbillon</h2>
        <p class="profile-subtitle">Web Developer</p>
<div class="social-icons">
    <a href="#" aria-label="Facebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="#" aria-label="Instagram" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="LinkedIn" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
</div>
    </div>
    <nav class="sidebar-nav" style="margin-top:0;">
            <ul class="nav-links nav-small">
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#home' : 'index.php'; ?>"><i class="fas fa-home"></i> <span class="nav-label">Home</span></a></li>
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#about' : 'about.php'; ?>"><i class="fas fa-user"></i> <span class="nav-label">About</span></a></li>
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#resume' : 'resume.php'; ?>"><i class="fas fa-file-alt"></i> <span class="nav-label">Resume</span></a></li>
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#portfolio' : 'portfolio.php'; ?>"><i class="fas fa-image"></i> <span class="nav-label">Portfolio</span></a></li>
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#services' : 'services.php'; ?>"><i class="fas fa-cogs"></i> <span class="nav-label">Services</span></a></li>
                <li><a href="<?php echo (basename($_SERVER['PHP_SELF']) == 'index.php') ? '#contact' : 'contact.php'; ?>"><i class="fas fa-envelope"></i> <span class="nav-label">Contact</span></a></li>
            </ul>
    </nav>
</aside>
