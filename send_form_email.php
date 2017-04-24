<?php



/* Template Name: Php Mailer */
if(isset($_POST['email'])) {
    //mykitchen4you@gmail.com
    $email_to = "mario@yellowtreeinc.com";
    $email_subject = "From Web Site";
    
    
    function died($error) {
        //error code
        
        echo "I'm sorry, something seems to have gone wrong!";
        echo "These errors appear below. <br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
    
    //validation expected data exists
    
    if(!isset($_POST['fname']) ||
        !isset($_POST['lname']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phonenum']) ||
        !isset($_POST['formtext'])) {
        
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
    
    $first_name = $_POST['fname']; // required
    $last_name = $_POST['lname']; // required
    $email_from = $_POST['email']; // required
    $phone = $_POST['phonenum']; // not required
    $message = $_POST['formtext']; // required 

    
    //pls Chris figure out why dis dont work
    
    
//    $error_message = "";
//    $email_exp = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/";
//    
//  if(!preg_match($email_exp,$email_from)) {
//    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
//  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
    
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($message) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n"; 
 
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    } 
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Phone Number: ".clean_string($phone)."\n";
    $email_message .= "Comments: ".clean_string($message)."\n";
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>

    <!-- include your own success html here -->
    <script>
        alert("Your message has been sent!");
        window.location.href = "contact.html";

    </script>


    <?php
 
}
 
?>
