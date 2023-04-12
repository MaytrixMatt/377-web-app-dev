<?php

/*************************************************************************************************
 * save.php
 *
 * Page to save a single application. This page expects the following request paramaters to
 * be set:
 *
 * - appId (this value will be empty if saving a new record)
 * - cusId (this value will be empty if saving a new record)
 * - date
 * - firstName
 * - lastName
 *************************************************************************************************/

include('library.php');

$conn = get_database_connection();

// Sanitize all input values to prevent SQL injection exploits
$appId = $conn->real_escape_string($appId);
$cusId = $conn->real_escape_string($cusId);
$date = $conn->real_escape_string($date);
$firstName = $conn->real_escape_string($firstName);
$lastName = $conn->real_escape_string($lastName);
for ($i=0; $i < sizeof($parkAreas); $i++) { 
    $parkAreas[$i] = $conn->real_escape_string($parkAreas);
}

if (empty($appId))
{
    /*
     * This is a new application (INSERT operation)
     */

    // Step 1: Create the `customer` record
    $sql = <<<SQL
    INSERT INTO customers (cus_first_name, cus_last_name)
        VALUES ('$firstName', '$lastName')
    SQL;

    if (!$conn->query($sql))
    {
        die('Error inserting customer record: ' . $conn->error);
    }

    // Step 2: Create the `application` record
    $appId = $conn->insert_id;
    $sql = <<<SQL
    INSERT INTO applications (app_cus_id, app_date)
        VALUES ($appId, '$date')
    SQL;

    if (!$conn->query($sql))
    {
        die('Error inserting application record: ' . $conn->error);
    }

    // Step 3: Create the `application_park_areas` records
    // TODO: Implement this!
}
else
{
    /*
     * This is an existing application (UPDATE operation)
     */

    // Step 1: Update the `customer` record
    $sql = <<<SQL
    UPDATE customers
       SET cus_first_name = '$firstName',
           cus_last_name = '$lastName'
     WHERE cus_id = $cusId
    SQL;

    if (!$conn->query($sql))
    {
        die('Error updating customer record: ' . $conn->error);
    }

    // Step 2: Update the `application` record
    $sql = <<<SQL
    UPDATE applications
       SET app_date = '$date'
     WHERE app_id = $appId
    SQL;

    if (!$conn->query($sql))
    {
        die('Error inserting application record: ' . $conn->error);
    }

    // Step 3: Update the `application_park_areas` records
    // TODO: Implement this!
}

$conn->close();

header('Location: index.php?content=list');