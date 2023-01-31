<!DOCTYPE html>
<html>
    <head>
        <title>Ticket List</title>
    </head>

    <body>

        <h1>Ticket List</h1>


        <table>
            <tr>
                <th>ID</th>
                <th>PRIORITY</th>
                <th>ISSUE</th>
                <th>EMIAL</th>
            </tr>
        <table>


        <?php

            $servername = "localhost";
            $username = "root";
            $password = "password";
            $dbname = "helpdesk";

            $conn = new mysqli($servername, $username, $password, $dbname);
            if ($conn->connect_error){
                die("Connection Falied: " . $conn->connect_error); 
            }       

            $sql = "Select * From tickets";

            $result = $conn->query($sql);
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>" . $row['tck_id'] . "</td>";
                echo "<td>" . $row['tck_priority'] . "</td>";
                echo "<td>" . $row['tck_issue'] . "</td>";
                echo "<td>" . $row['tck_email'] . "</td>";
                echo "</tr>";
            }



        ?>

    </body>
</html>