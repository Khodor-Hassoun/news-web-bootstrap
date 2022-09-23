<?php
    header("Access-Control-Allow-Origin: *");
    include('connection.php');

    $query = $mysqli->prepare("SELECT * FROM news");
    $query ->execute();
    $array = $query->get_result();

    // echo $array;
    $response = [];

    while($a = $array->fetch_assoc()){
        $response[] = $a;
    }

    $json = json_encode($response);
    echo $json;

?>