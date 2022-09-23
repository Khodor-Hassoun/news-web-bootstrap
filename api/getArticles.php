<?php
    header("Access-Control-Allow-Origin: *");
    include('connection.php');

    $query = $mysqli->prepare("SELECT * FROM news");
    $query ->execute();
    $response = $query->get_result();
    $response = $response->fetch_assoc();
    // echo $array;
    // $response = [];

    // while($a = $array->fetch_assoc()){
    //     $response[] = $a;
    // }

    $json = json_encode($response);
    echo $json;

?>