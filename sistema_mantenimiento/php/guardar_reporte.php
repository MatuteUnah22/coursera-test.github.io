<?php

    include "conexion.php";

    $area=$_POST['area'];
    $descripcion=$_POST['descripcion'];
    $prioridad=$_POST['prioridad'];
    $fecha=$_POST['fecha'];

    $imagen="";

    if($_FILES['imagen']['name']!=""){

    $nombre=$_FILES['imagen']['name'];

    $ruta="../imagenes/".$nombre;

    move_uploaded_file($_FILES['imagen']['tmp_name'],$ruta);

    $imagen=$nombre;

    }

    $sql="INSERT INTO reportes
        (area,descripcion,prioridad,fecha,imagen,usuario_id)
        VALUES
        ('$area','$descripcion','$prioridad','$fecha','$imagen','".$_SESSION['id']."')";

    $conexion->query($sql);

    header("Location: ../dashboard.php");

?>