<?php
include('library.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DPW Tracker - permit list</title>
    </head>

    <body>
        <div class="container-fluid">
            <a href = index.php ><h1 class="font-monospace fst-italic text-success">DPW Tracker</h1></a>
            <a href = index.php?content=List>list</a>
            <a href = index.php?content=Field>field</a>
            <a href = index.php?content=Date>date</a>
            <?php include(get_content() . '.php'); ?>
        </div>
    </body>
</html>

<script>
    function deleteApplication(id) {
        if (confirm('Are you sure you want to delete this record?')) {
            location.href = 'delete.php?id=' + id;
        }
    }
</script>

<h2>All Tickets</h2>

<table class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>Date</th>
            <th>Applicant</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Field(s)</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>

    <?php

    $conn = get_database_connection();

    // Build the SELECT statement
    $sql = "SELECT * FROM applications JOIN customers ON cus_id = app_cus_id ORDER BY app_date, cus_last_name, cus_first_name, app_id";

    // Execute the query and save the results
    $result = $conn->query($sql);

    // Iterate over each row in the results
    while ($row = $result->fetch_assoc())
    {
        echo "<tr>";
        echo "<td>" . $row['app_id'] . "</td>";
        echo "<td>" . $row['cus_last_name'] . "</td>" . " , " . $row['cus_first_name'];
        echo "<td>" . $row['cus_phone'] . "</td>";
        echo "<td><a href='mailto:". $row['tkt_contact_email'] . "'>" . $row['tkt_contact_email'] . "</a></td>";
        echo "<a href='index.php?content=detail&id=" . $row['app_id'] . "' title='Edit this ticket'><i class='fa fa-pencil' aria-hidden='true'></i></a> ";
        echo "<a href='javascript:deleteApplication(" . $row['app_id'] . ")' title='Delete this ticket'><i class='fa fa-trash-o' aria-hidden='true'></i></a>";
        echo "</td>";
        echo "</tr>";
    }

    ?>

    </tbody>
</table>

<a href="index.php?content=new" class="btn btn-primary" role="button"><i class="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Apply</a>
