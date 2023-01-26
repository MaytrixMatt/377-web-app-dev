<!DOCTYPE html>
<html>
    <head>
        <title>Ticket Form</title>
    </head>

    <body>

        <h1>Thank you for your request.</h1>

        <?php
            extract($_REQUEST);

            $servername = "localhost";
            $username = "root";
            $password = "password";
            $dbname = "helpdesk";

            $conn = new mysqli($servername, $username, $password, $dbname);
            if ($conn->connect_error){
                die("Connection Falied: " . $conn->connect_error);
            }

            $problem = $conn->real_escape_string($problem);
            $contact = $conn->real_escape_string($contact);
            
            
            $sql = "INSERT INTO tickets (tck_issue, tck_priority, tck_email)" .
            "VALUES ('$problem', $priority, '$contact')";
            
            echo $sql;


            $conn->query($sql);
            
            // echo  " Problem: $problem" .
            //       " Soultion: Unknown" .
            //       " Email: $contact" .
            //       " Priority: $priority" .
            //       " Status: Submitted" ;
            ?>

        <h3>Your unique ticket id: <span font-style="italic" id="ticketID"></span></h3>

        <a href="ticket-form.php">form</a>


    </body>
</html>