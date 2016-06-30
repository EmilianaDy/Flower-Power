<?php


    require 'PHPMailer-master/PHPMailerAutoload.php';

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Get the form fields and remove whitespace.
            $name = strip_tags(trim($_POST["name"]));
                    $name = str_replace(array("\r","\n"),array(" "," "),$name);
            $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
            $message = trim($_POST["message"]);


        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
            }    
        }

        $mail = new PHPMailer();

        $mail->IsSMTP();
        $mail->SMTPDebug = 0;
        $mail->SMTPAuth = true;
        $mail->Debugoutput = 'html';
        $mail->Host = "smtp.sendgrid.net";
        $mail->Port = 587;
        $mail->Username = "emiliana.guzik";
        $mail->Password = "Emi555ly";

        $mail->SetFrom($email);
        $mail->Subject = "Flower Power contact";
        $mail->MsgHTML($message);
        $mail->AltBody = ($message);
        $mail->AddAddress('emiliana.guzik@gmail.com', 'Emi');


        if ($mail->Send()) {
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }
        

?>