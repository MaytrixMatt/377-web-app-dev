<?php

/*************************************************************************************************
 * permitDetail.php
 *
 * Content page to display the detail form for a single application. This page is expected to be
 * contained within index.php.
 *************************************************************************************************/

$appId = '';
$date = '';
$firstName = '';
$lastName = '';

if (isset($id))
{
    // TODO: Query for the reserved park_areas
    $sql = <<<SQL
    SELECT *
      FROM applications
      JOIN customers ON app_cus_id = cus_id
     WHERE app_id = $id
    SQL;

    $conn = get_database_connection();

    $result = $conn->query($sql);

    $row = $result->fetch_assoc();

    $appId = $row['app_id'];
    $date = $row['app_date'];
    $cusId = $row['cus_id'];
    $firstName = $row['cus_first_name'];
    $lastName = $row['cus_last_name'];
}

?>

<form action="save.php" method="POST">
    <input type="hidden" name="appId" value="<?php echo $appId; ?>" />
    <input type="hidden" name="cusId" value="<?php echo $cusId; ?>" />
    <div class="mb-3">
        <label for="date" class="form-label">Date</label>
        <input type="date" class="form-control" name="date" value="<?php echo $date; ?>">
    </div>
    <div class="mb-3">
        <label for="firstName" class="form-label">First name</label>
        <input type="text" class="form-control" name="firstName" value="<?php echo $firstName; ?>">
    </div>
    <div class="mb-3">
        <label for="lastName" class="form-label">Last name</label>
        <input type="text" class="form-control" name="lastName" value="<?php echo $lastName; ?>">
    </div>
    </div>
    <div class="mb-3">
        <label for="parkAreas" class="form-label">Fields</label>
        <select name="parkAreas[]" class="form-select" multiple="true">
<?php

$sql = <<<SQL
SELECT *
FROM applications
JOIN customers ON app_cus_id = cus_id
WHERE app_id = $id
SQL;

?>
        </select>
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
    <a href="index.php?content=list" class="btn btn-secondary" role="button">Cancel</a>
</form>