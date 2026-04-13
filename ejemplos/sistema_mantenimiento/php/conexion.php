<?php

    $host="localhost";
    $user="root";
    $pass="";
    $db="sistema_mantenimiento";

    $conexion = new mysqli($host,$user,$pass,$db);

    if($conexion->connect_error){
        die("Error de conexión");
    }

    session_start();

?>