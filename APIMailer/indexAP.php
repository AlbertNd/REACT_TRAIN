<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server 

if($_SERVER['HTTP_REFERER']=== "http://localhost:3000/"){
    // get data from get method
    $name = isset($_GET['name']) ? $_GET['name']:null;
    $email = isset($_GET['sendto']) ? $_GET['sendto']:null;
    $message = isset($_GET['message']) ? $_GET['message']:null;

    if($name && $email && $message){
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'albertndizeye@gmail.com';                     // SMTP username
            $mail->Password   = 'syola97++';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('albertndizeye@gmail.com', 'react form');
            
            $mail->addAddress('$email');               // Name is optional
            $mail->addReplyTo('albertndizeye@gmail.com', 'Information');
          
        
            // Attachments
          
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Here is the subject';
            $mail->Body    = 'Name: '.$name.'<br/> Email :'.$email.' <br/> Message:'.$message;
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "al the filesd blb albablablalbalbal";
    }

}else{
    echo "you can use this server";
}

?>