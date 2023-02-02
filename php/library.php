<?php
function get_database_connection(){

    $servername = "localhost";
    $username = "root";
    $password = "password";
    $dbname = "helpdesk";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error){
        die("Connection Falied: " . $conn->connect_error); 
    }       

    return $conn;
}