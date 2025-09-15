<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

/**
 * Sends a contact email using PHPMailer
 *
 * @param string $name Sender's name
 * @param string $email Sender's email
 * @param string $subject Email subject
 * @param string $message Email message
 * @return array ['success' => bool, 'message' => string]
 */
function sendContactEmail($name, $email, $subject, $message) {
    $name = trim($name);
    $email = trim($email);
    $subject = trim($subject);
    $message = trim($message);

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        return ['success' => false, 'message' => 'All fields are required'];
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['success' => false, 'message' => 'Invalid email address'];
    }

    $mail = new PHPMailer(true);

    $config = require __DIR__ . '/email_config.php';

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';  // Set the SMTP server to send through
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['smtp_username']; // SMTP username
        $mail->Password   = $config['smtp_password']; // SMTP password (use app password if 2FA enabled)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        //Recipients
        $mail->setFrom($config['smtp_username'], 'Contact Form');
        $mail->addAddress('zorencorbillon@gmail.com', 'Zoren Corbillon');

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

        $mail->send();
        return ['success' => true, 'message' => 'Message sent successfully'];
    } catch (Exception $e) {
        return ['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"];
    }
}

// Handle direct POST requests (for AJAX or direct form submission)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    $result = sendContactEmail($name, $email, $subject, $message);
    echo json_encode($result);
    exit;
}
?>
