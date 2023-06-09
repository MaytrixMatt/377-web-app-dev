<table class='table table-bordered table-hover'>
<thead>
    <tr class="table-dark">
        <th>Field(s)</th>
    </tr>
</thead>
<tbody class="table-group-divider">

<form method="POST">
<div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" name="date" id="id">
</div>
<button type="submit" class="btn btn-primary">Search</button>
</form>


<?php
    $conn = get_database_connection();
    $sql = <<<SQL
    SELECT par_name, pka_name
    FROM parks
    JOIN park_areas on par_id = pka_par_id
    WHERE pka_id not in (select apa_pka_id from application_park_areas join applications on apa_app_id = app_id where app_date = $date)
    ORDER BY par_name, pka_name
    SQL;

    $result = $conn->query($sql);

    $empty = true;
    while ($row = $result->fetch_assoc())
        {
            echo '<tr class="align-middle" style="cursor:pointer">';
            echo '<td>' . $row['par_name'] .' --- '. $row['pka_name'] . '</td>';
            echo '</tr>';

            $empty = false;
        }

?>
</tbody>
</table>