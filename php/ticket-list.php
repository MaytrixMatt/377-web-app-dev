<?php
    include('library.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Ticket List</title>
        <script>
            function deleteTicket(id){
                if(confirm('Are you sure?')){
                    alert('Deleting Files...')
                    location.href = 'ticket-delete.php?id=' + id;
                }
            }
        </script>
    </head>

    <body>

        <h1>Ticket List</h1>

        <table>
            <tr>
                <th>ID</th>
                <th>PRIORITY</th>
                <th>ISSUE</th>
                <th>EMAIL</th>
                <th>DELETE</th>
            </tr>

        <?php

            $conn = get_database_connection();

            $sql = "Select * From tickets";

            $result = $conn->query($sql);
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>" . $row['tck_id'] . "</td>";
                echo "<td>" . $row['tck_priority'] . "</td>";
                echo "<td>" . $row['tck_issue'] . "</td>";
                echo "<td><a href='mailto:" . $row['tck_email'] . "'>" . $row['tck_email'] . "</a></td>";
                echo "<td><button onclick='deleteTicket(". $row['tck_id'] . ")'>Delete</button></td>";
                echo "</tr>";
            }



        ?>
        </table>
    </body>
</html>