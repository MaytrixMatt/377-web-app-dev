<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
                <th>EDIT</th>
                <th>DELETE</th>
                <th>STATUS</th>
                <th>RESOLUTION</th>
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
                echo "<td><a href='ticket-edit.php?id=". $row['tck_id'] . ")'><i class='fa fa-pencil' aria-hidden='true'></i></button></td>";
                echo "<td><button onclick='deleteTicket(". $row['tck_id'] . ")'><i class='fa fa-ban' aria-hidden='true'></i></button></td>";
                echo "<td>" . $row['tck_status'] . "</td>";
                echo "<td>" . $row['tck_resolution'] . "</td>";
                echo "</tr>";
            }
            echo "<a href= 'ticket-form.php'><button><i class='fa fa-plus-circle' aria-hidden='true'></i></button></a>";



        ?>
        </table>
    </body>
</html>