/** VIDEO #56: Conceptos básicos de HTTP */
// Se explicó los conceptos necesarios de los protocolos HTTP, y los escribí en el cuaderno


/** VIDEO #57 (parte 1): Conceptos básicos de AJAX 
 * Se explicó los conceptos necesarios de AJAX, y los escribí en el cuaderno */


/** VIDEO #57 (2da parte): Conceptos básicos de AJAX
 * Se configuro la biblioteca de ajax-utils.js */


/** VIDEO #57 (3ra parte): Conceptos básicos de AJAX
 *  */
// Event handling
// document.addEventListener("DOMContentLoaded",
// 	function (event) { // Esto significa que esto solo se ejecutará cuando la pág tenga cargado todo el contenido HTML, pero aún no haya cargado todo el CSS o las imágenes, etc.

// 		// Unobstrusive event binding
// 		document.querySelector("button") 
// 			.addEventListener("click", function () { // cuando el usuario hace clic en ese botón queremos que se ejecute la func 

// 			// var self = this;
// 			// var name = "";

// 			// Call server to get the name
// 			$ajaxUtils // hacemos la llamada al servidor para obtener ese archivo (herramientas de la agencia '$ajaxUtils')
// 				.sendGetRequest("/ejemplos/Lectura-56/data/name.txt",//"/data/name.txt", // '.sendGetRequest' se le proporciona la URL
// 				function (request) { // y quiere una func de controlador, eso requiere un objeto de solicitud y tendrá en él nuestra respuesta del servidor
// 					var name = request.responseText; // es una expresión de func en línea, y estamos diciendo que este nombre de aquí debería devolverse 'self.name'
// 					//console.log(name);

// 					document.querySelector("#content") // seleccionamos el contenido y recordamos q elcontenido del cód HTML de puntos es solo un marcador de posocoón 'div' vacio, por lo q llamaremos a este 'content'
// 						.innerHTML = `<h2>Hello  ${name}!`;// y estamos diciendo q '.innerHTML' debería ser un 'h2 hello' más 'self.name'
// 				}); // una vez q llamamos a $ajaxUtils y enviamos esta solicitud, ahora que el nombre está definido
// 		});

// 	}
// );

/** VIDEO #58: Procesamietno de JSON
 *  */
// Event handling
document.addEventListener("DOMContentLoaded",
	function (event) {

		// Unobstrusive event binding
		document.querySelector("button") 
			.addEventListener("click", function () {

			// Call server to get the name
			$ajaxUtils 
				.sendGetRequest("/ejemplos/Lectura-56/data/name.json",
				function (res) { //esta vez lo q obtenemos como parte de nuestro controlador de respuestas ya no es una solicitud, sino el texto JSON de respuesta que se convirtió en un objeto, así que 'res' es un obejto de JS
					var message = 
						res.firstName + " " + res.lastName;

					if (res.likesChineseFood) {
						message += " likes Chinese food";
					} else {
						message += " doesn't likes Chinese food";
					}

					message += " and uses ";
					message += res.numberOfDisplay;
					message += " displays for coding";


					document.querySelector("#content")
						.innerHTML = `<h2>${message} </h2>`;
				});
		});

	}
);

/** VIDEO # (parte ):  */
// 
