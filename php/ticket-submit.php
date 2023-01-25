<!DOCTYPE html>
<html>
    <head>
        <title>Ticket Form</title>
    </head>

    <body>

        <h1>Thank ou for your request.</h1>

        <?php
            extract($_REQUEST);

            echo  " Problem: $problem" .
                  " Soultion: Unknown" .
                  " Email: $contact" .
                  " Priority: $priority" .
                  " Status: Submitted" 

            ?>

        <h3>Your unique ticket id: <span font-style="italic" id="ticketID"></span></h3>

        <a href="ticket-form.php">form</a>


    </body>
</html>