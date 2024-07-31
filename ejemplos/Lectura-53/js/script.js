/** VIDEO #53 (parte 1): DOM 
 * document.getElementById("title"); sirve para mostrar todo el elemento y la etiqueta que se llame, mediante el Id de la etiqueta 
	
	ej.: <h1 id="title">Manipulación...</h1>
 */

// console.log(document.getElementById("title"));
// console.log(document instanceoof HTMLDocument);


/** VIDEO #53 (2da parte): Gestión de Eventos */
// 

// function sayHello () {
// 	// console.log(
// 	// 	document.getElementById("name").value // se agrega el '.value' para poder obtener el valor del input, o sea, lo que escribe el usuario.
// 	// );

// 	var name = document.getElementById("name").value;
// 	var message = "<h2>Hello " + name + "!</h2>";
// 	// var message2 = `Hello ${name}!`; // Utilizando los backtick
// 	// console.log(message2);
// 	// console.log(message);

// 	// Para agregarlo en el <div>, para agregarlo se utiliza una propiedad (.textContent) para poder insertar texto dentro de un elemento
// 	// document.getElementById("content").textContent = message; // con el .textContent agreagrá de está manera la impresión en el docHtml (<h2>Hello David!</h2>)

// 	document.getElementById("content").innerHTML = message; // con el .innerHTML agregará la impresión sin las etiquetas

// 	if (name === "student") {
// 		var title = document
// 			.querySelector("#title") // .querySelector no toma el nombre del ID, sino un selector, el cuál se debe especificar (#title)
// 			.textContent;

// 		title += " & Lovi'n it!";

// 		document.querySelector("#title").textContent = title; // se debe de agregar lo que se guardó en title a la pág para pasarle el nuevo valor por referencia a la variable primitiva que se creo
// 		// document.querySelector("h1").textContent = title; // también se podría llamar por el elemento, en caso solo hubiéra uno.
// 	}
// }

/** VIDEO #54: Manejo de eventos */
// Event handling
// function sayHello (event) {
// 	// console.log(this);
// 	this.textContent = "Said it!"; //lo que hará, es cambiar la desc. del botón de "Say it!" a "Said it!" al darle click al botón.
// 	var name = document.getElementById("name").value;
// 	var message = `<h2>Hello ${name}!</h2>`;

// 	document.getElementById("content").innerHTML = message;

// 	if (name === "student") {
// 		var title = document
// 			.querySelector("#title")
// 			.textContent;

// 		title += " & Lovi'n it!";

// 		document.querySelector("#title").textContent = title;
// 	}
// }

// //Unobstrusive event binding
// document.querySelector("button") //acá selecciona el selector del botón, o sea, el 'button'.
// 	.addEventListener("click", sayHello); // (.addEventListener) quiere escuchar el evneto click. y cuando lo haga llamará a la función 'sayHello'

// document.querySelector("button").onclick = sayHello;

// Evento de ciclo de vida de la pág, que nos permitirá asignar los eventos a los elmentos de la pág, una vez que se carguen
// document.addEventListener("DOMContentLoaded", 
// 	/** Ahora se tiene toda la función dentro de 'addEventListener',
// 	 * por lo que se ejecutará esta función cuando se llame a este
// 	 * archivo de eventos, se cargue el contenido del DOM y, eso 
// 	 * ocurrirá antes de que se cargue cualquier imagen, CSS o 
// 	 * cualquier otro Script */
// 	function (event) {
// 		function sayHello (event) {
// 			this.textContent = "Said it!";
// 			var name = document.getElementById("name").value;
// 			var message = `<h2>Hello ${name}!</h2>`;

// 			document.getElementById("content").innerHTML = message;

// 			if (name === "student") {
// 				var title = document.querySelector("#title").textContent;

// 				title += " & Lovi'n it!";

// 				document.querySelector("#title").textContent = title;
// 			}
// 		}

// 		//Unobstrusive event binding
// 		document.querySelector("button").addEventListener("click", sayHello);
// 	}
// );


/** VIDEO #55: The 'event' Argument - El argumento del "acontecimiento" --> 
 * */
document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
			console.log(event);

			this.textContent = "Said it!";
			var name = document.getElementById("name").value;
			var message = `<h2>Hello ${name}!</h2>`;

			document.getElementById("content").innerHTML = message;

			if (name === "student") {
				var title = document.querySelector("#title").textContent;

				title += " & Lovi'n it!";

				document.querySelector("#title").textContent = title;
			}
		}

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);
		
		// crea un evento para saber el movimiento del mouse en el body de la pág, y pedira ñas cordenadas del ClientX e ClientY
		document.querySelector("body").addEventListener("mousemove", 

			function (event) {
				// esta condición es para que si se mantiene presionada la tecla 'Shift', se empezará a capturar las cordenadas de donde se mueve el mouse
				if (event.shiftKey === true) {
					console.log(`x: ${event.clientX}`);
					console.log(`y: ${event.clientY}`);
				}
			}
		);
	}
);


/** VIDEO #52 (parte 2):  */
// 

