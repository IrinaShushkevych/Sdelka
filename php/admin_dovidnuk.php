<?php
    session_start();
    $pdo = null;
    require_once("pdoconnect.php");

    $pass = $_POST['passwordnew'];
    $user = $_POST['userid'];
    
    $sql = " SELECT code_dovid, name_dovid FROM dovidnuku" ;
    $res = $pdo->query($sql);
    $r = $res->fetchAll();
    
    echo json_encode($r)

?>