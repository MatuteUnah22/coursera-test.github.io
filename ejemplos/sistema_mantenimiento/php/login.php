<?php
    include "conexion.php";
    
    $usuario=$_POST['usuario'];
    $password=md5($_POST['password']);
    $sql="SELECT * FROM usuarios 
    WHERE usuario='$usuario' AND password='$password'";
    $resultado=$conexion->query($sql);

    if($resultado->num_rows>0){
        $datos=$resultado->fetch_assoc();
        $_SESSION['usuario']=$datos['usuario'];
        $_SESSION['id']=$datos['id'];
        header("Location: ../dashboard.php");
    }
    else{
        echo "Usuario o contraseña incorrectos";
    }
?>