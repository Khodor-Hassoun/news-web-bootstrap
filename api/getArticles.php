<?php
    header("Access-Control-Allow-Origin: *");
    include('connection.php');

    $query = $mysqli->prepare('SELECT * FROM newsdb');
    $query ->execute();
    $query ->get_result();

    re

?>