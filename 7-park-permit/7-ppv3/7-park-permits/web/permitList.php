<?php

/*************************************************************************************************
 * permitList.php
 *
 * Content page to display a list of applications. This page is expected to be contained within
 * index.php.
 *************************************************************************************************/

?>

<script>
    function deleteApplication(id) {
        if (confirm('Are you sure you want to delete this application?')) {
            location.href = 'delete.php?id=' + id;
        }
    }
</script>

<table class='table table-bordered table-hover'>
    <thead>
        <tr class="table-dark">
            <th>#</th>
            <th>Date</th>
            <th>Applicant</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Field(s)</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody class="table-group-divider">

    <?php

    $conn = get_database_connection();

    // Build the SELECT statement
    $sql = <<<SQL
    SELECT *
      FROM applications
      JOIN customers ON cus_id = app_cus_id
     ORDER BY app_date, cus_last_name, cus_first_name, app_id
    SQL;

    // Execute the query and save the results
    $result = $conn->query($sql);

    $empty = true;

    // Iterate over each row in the results
    while ($row = $result->fetch_assoc())
    {
        echo '<tr>';
        echo '<td>' . $row['app_id'] . '</td>';
        echo '<td>' . $row['app_date'] . '</td>';
        echo '<td>' . $row['cus_last_name'] . ', ' . $row['cus_first_name'] . '</td>';
        echo '<td>' . $row['cus_phone'] . '</td>';
        echo '<td><a href="mailto:'. $row['cus_email'] . '">' . $row['cus_email'] . '</a></td>';
        echo '<td>TODO: Fields should be listed here</td>';
        echo '<td>';
        echo '<a href="index.php?content=detail&id=' . $row['app_id'] . '" title="Edit this application"><i class="fa fa-pencil" aria-hidden="true"></i></a> ';
        echo '<a href="javascript:deleteApplication(' . $row['app_id'] . ')" title="Delete this application"><i class="fa fa-trash-o" aria-hidden="true"></i></a>';
        echo '</td>';
        echo '</tr>';

        $empty = false;
    }

    if ($empty)
    {
        echo '<tr><td class="text-center" colspan="7"><em>No Records</em></td></tr>';
    }

    ?>

    </tbody>
</table>

<a href='index.php?content=detail' class='btn btn-primary' role='button'><i class='fa fa-plus-circle' aria-hidden='true'></i>&nbsp;Add an application</a>
