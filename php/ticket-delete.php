<?php
    include('library.php');

    extract($_REQUEST);

    $conn = get_database_connection();
    $sql = "DELETE FROM tickets WHERE tck_id = $id";

    if($conn)