<?php
    include "php/conexion.php";

    $limite=7;
    $pagina=isset($_GET['pagina'])?$_GET['pagina']:1;
    $inicio=($pagina-1)*$limite;
    $consulta=$conexion->query("SELECT * FROM reportes LIMIT $inicio,$limite");
    $total=$conexion->query("SELECT COUNT(*) total FROM reportes")->fetch_assoc()['total'];
    $paginas=ceil($total/$limite);
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Historial</title>
        <link rel="stylesheet" href="css/estilos.css">
    </head>

    <body>
        <div class="sidebar">
            <h2>Panel</h2>
            <a href="dashboard.php">Inicio</a>
            <!-- <a href="historial.php">Reportes</a> -->
            <a href="logout.php">Cerrar sesión</a>
        </div>

        <div class="content">
            <button class="menu-btn" onclick="toggleMenu()">☰</button>
            <!-- <h1>Historial de reportes</h1> -->
            <h1>Historial de reportes del Politécnico Antonio Figaris Báes</h1>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Área</th>
                    <th>Descripción</th>
                    <th>Prioridad</th>
                    <th>Fecha</th>
                    <th>Imagen</th>
                </tr>

                <?php while($r=$consulta->fetch_assoc()){ ?>
                    <tr>
                        <td><?php echo $r['id']; ?></td>
                        <td><?php echo $r['area']; ?></td>
                        <td><?php echo $r['descripcion']; ?></td>
                        <td><?php echo $r['prioridad']; ?></td>
                        <td><?php echo $r['fecha']; ?></td>
                        <td>
                            <?php if($r['imagen']){ ?>
                            <img src="imagenes/<?php echo $r['imagen']; ?>" width="60">
                            <?php } ?>
                        </td>
                    </tr>
                <?php } ?>
            </table>

            <div class="pagination">
                <?php
                    for($i=1;$i<=$paginas;$i++){
                        echo "<a href='historial.php?pagina=$i'>$i</a>";
                    }
                ?>
            </div>
        </div>
        <footer class="footer">
            <p>
                © 2026 Sistema de mantenimiento escolar - Instituto Politécnico Antonio Figaris Báez  
                | Desarrollado por Grupo 5 de I.N.F: 5to "A"
            </p>
        </footer>
        <script>
            function toggleMenu() {
                document.querySelector('.sidebar').classList.toggle('active');
            }

            // Cerrar al hacer click fuera
            document.addEventListener('click', function(e) {
                const sidebar = document.querySelector('.sidebar');
                const button = document.querySelector('.menu-btn');

                if (!sidebar.contains(e.target) && !button.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
        </script>

    </body>
</html>