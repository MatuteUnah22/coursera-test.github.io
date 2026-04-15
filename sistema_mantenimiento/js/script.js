function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}
// document.addEventListener('DOMContentLoaded', function () {
//   const sidebar = document.querySelector('.sidebar');
//   const button = document.querySelector('.menu-btn');

//   if (!sidebar || !button) return;

//   // Función de toggle
//   window.toggleMenu = function () {
//     sidebar.classList.toggle('active');
//   };

//   // Enlazar botón si no está ya enlazado
//   button.addEventListener('click', function (e) {
//     e.stopPropagation();
//     toggleMenu();
//   });

//   // Cerrar al hacer clic fuera (si el sidebar está abierto)
//   document.addEventListener('click', function (e) {
//     const clickedInsideSidebar = sidebar.contains(e.target);
//     const clickedButton = button.contains(e.target);

//     // Si no hizo clic dentro del sidebar ni en el botón, cerrar
//     if (!clickedInsideSidebar && !clickedButton) {
//       sidebar.classList.remove('active');
//     }
//   });

//   // Cerrar al hacer clic en un enlace del sidebar (en móvil)
//   sidebar.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//       sidebar.classList.remove('active');
//     });
//   });
// });

// function toggleMenu() {
//     document.querySelector('.sidebar').classList.toggle('active');
// }

// // cerrar al hacer click fuera
// document.addEventListener('click', function (e) {
//     const sidebar = document.querySelector('.sidebar');
//     const button = document.querySelector('.menu-btn');

//     const clickedInsideSidebar = sidebar.contains(e.target);
//     const clickedButton = button.contains(e.target);

//     if (!clickedInsideSidebar && !clickedButton) {
//         sidebar.classList.remove('active');
//     }
// });

// // cerrar al tocar un link del sidebar (IMPORTANTE en móvil)
// document.querySelectorAll('.sidebar a').forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelector('.sidebar').classList.remove('active');
//     });
// });

// function generarPDF(){

//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     let y = 20;

//     // 🔹 Datos del formulario
//     const area = document.querySelector('[name="area"]').value;
//     const descripcion = document.querySelector('[name="descripcion"]').value;
//     const prioridad = document.querySelector('[name="prioridad"]').value;
//     const fecha = document.querySelector('[name="fecha"]').value;
//     const imagenInput = document.querySelector('[name="imagen"]');

//     // LOGO
//     const logo = new Image();
//     logo.src = "imagenes/logo.png";

//     logo.onload = function(){
//         // MENOS MARGEN SUPERIOR
//         let y = 10;

//         // LOGO MÁS PEQUEÑO
//         doc.addImage(logo, "PNG", 20, y, 25, 25);

//         // TEXTO MÁS ALINEADO
//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(13);
//         doc.text("SISTEMA DE MANTENIMIENTO ESCOLAR", 50, y + 10);

//         doc.setFont("helvetica", "normal");
//         doc.setFontSize(10);
//         doc.text("Instituto Politécnico Antonio Figaris Báez", 50, y + 17);

//         // Línea más arriba
//         doc.line(20, y + 30, 190, y + 30);

//         // Continuación más pegada
//         y += 35;

//         // TÍTULO
//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(14);
//         doc.text("REPORTE DE MANTENIMIENTO", 105, y, null, null, "center");

//         y += 15;

//         // DATOS
//         doc.setFont("helvetica", "normal");
//         doc.setFontSize(12);

//         doc.text(`Área: ${area}`, 20, y); y += 8;
//         doc.text(`Prioridad: ${prioridad}`, 20, y); y += 8;
//         doc.text(`Fecha: ${fecha}`, 20, y); y += 10;

//         // DESCRIPCIÓN
//         doc.setFont("helvetica", "bold");
//         doc.text("Descripción:", 20, y); y += 6;

//         doc.setFont("helvetica", "normal");

//         const texto = doc.splitTextToSize(descripcion, 170);
//         doc.text(texto, 20, y);
//         y += texto.length * 7 + 10;

//         // IMAGEN
//         if(imagenInput.files.length > 0){

//             const archivo = imagenInput.files[0];
//             const reader = new FileReader();

//             reader.onload = function(e){

//                 doc.setFont("helvetica", "bold");
//                 doc.text("Evidencia fotográfica:", 20, y);
//                 y += 5;

//                 doc.addImage(e.target.result, "JPEG", 20, y, 80, 60);
//                 y += 70;

//                 agregarFooter();
//             }

//             reader.readAsDataURL(archivo);

//         } else {
//             agregarFooter();
//         }

//         // FOOTER
//         function agregarFooter(){

//             y += 10;

//             doc.line(60, y, 150, y);
//             y += 5;

//             doc.setFontSize(10);
//             doc.text("Firma del responsable", 105, y, null, null, "center");

//             y += 10;

//             doc.setFontSize(9);
//             doc.text("Documento generado automáticamente por el sistema", 105, y, null, null, "center");

//             doc.save("reporte_mantenimiento.pdf");
//         }

//     }

// }