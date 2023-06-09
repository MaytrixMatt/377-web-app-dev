<?php

$conn = get_database_connection();
$sql = <<<SQL
    SELECT app_date, apa_app_date
    FROM applications
    JOIN application_park_areas ON app_id = apa_app_id
SQL;
$result = $conn->query($sql);

$booked = array();
while ($row = $result->fetch_assoc()){
    $booked[] = $row['app_date'];
}

$start_date = date_create("2023-05-01"); 
$date = date_create("2023-05-01");
$interval = DateInterval::createFromDateString('1 Day');

while ($date->format('m') == $start_date->format('m')){
    $status = '<br />';
    if (in_array($date->format('Y-m-d'), $booked)){
        $status = ' -- BOOKED<br />';
    }
    echo $date->format('n/d/Y') . $status;
    $date = $date->add($interval);
}