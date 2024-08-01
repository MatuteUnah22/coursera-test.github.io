/** VIDEO #57 (2da parte): Conceptos básicos de AJAX */
// Aquí irán los prcedimientos de AJAX para  separarlos de archivo JS

// (function (global) {
// 	// Set up a namespace for our utility - Configurar un espacio de nombres para nuestra utilidad
// 	var ajaxUtils = {}; // se crea el obejto vacio para adjuntar lo que se quiero exponer al mundo exterior

// 	// Return an HTTP resquest object - Devolver un objeto de solicitud HTTP
// 	function getRequestObject () { // esta función aquí no está adjunta a mis utilidades de ajax 'ajaxUtils', ya que no estará disponible directament para el usuario de 'ajaxUtils'.
// 		if (window.XMLHttpRequest) { // comprueba qué tipo de objeto está disp pa nosotros
// 			return (new XMLHttpRequest());
// 		} else if (window.ActiveXObject) { // Estas condiciones son para navegadores antiguos, así que 'window.ActiveXObject' es algo que los navegadores antiguos de Internet Explorer usaban y ya no se usan
// 			// For very old IE browsers (optional) - Para navegadores IE muy antiguos (opcional)
// 			return (new ActiveXObject("Microsoft.XMLHTTP"));
// 		} else { // en caso de que haya un navegador que vaya a acceder a él, no sea compatible en absoluto con AJAX, lo que significa que este objeto no estará disp
// 			global.alert("Ajax is not supported!"); // Solo enviara a pantalla el mensaje
// 			return (null); // retornara una valor nulo
// 		}
// 	}

// 	// Makes an AJAX GET request to 'requestURL' - Realiza una solicitud AJAX GET a 'requestURL'
// 	// Esta es la función principal 
// 	ajaxUtils.sendGetRequest = // 'sendGetRequest' está función está adjunta a 'ajaxUtils'. Lo que haremos en esta función es enviar una solicitud GET al servidor
// 	function (requestUrl, responseHandler) { // que es lo que espera esta función como parámetro. 1 'requestUrl' espera la URL de la solicitud. 2 'responseHandler' necesitamos una función de gestión de respuestas, esta última gestionara el resultado de lo que el servidor devuelva
// 		var request = getRequestObject(); // Lo 1ro que se hace es obtener ese objeto de solicitud y es precisamente la función ('getRequestObject' la funcion que no esta adjunta) se obtendra el objeto 'XMLHttpRequest'

// 		request.onreadystatechange = // al tener el objto de solicitud 'request' se guardara en esa variable local, y se configura en otra función 'onreadystatechange'
// 		function () { // 'onreadystatechange' abarca diferentes etapas de la comunicación de red entre el nav y el servidor
// 			handleResponse(request, responseHandler); // lo q se hace en esta func es llamar a esta func 'handleResponse', y a la func 'request' pasa una solicitud, este objeto de solicitud, y también se le pasa el controlador de respuestas 'responseHandler'. Así q cuando el servidor regrese con una respuesta
// 		}; //  esta es la función a la q se llamará c/vez q se produxca un cambio en el estado de la comunicación, esta es la func que se va a llamar

// 		request.open("GET", requestUrl, true); // crar elcomando 'open', con unasolicitud de obtención, vamos a pasarle la URL y nos aseguramos de decir q es cierto aquí. al dejarla en 'true' estamos haciendo que sea asincróna la conección y que siga funcionando el navegador
// 		request.send(null); // for POST only - solo para correo // se encarga de ejecutar la solicitud y la envia al servidor
// 	};

// 	/** Only calls user provided 'responseHandler'
// 	 * function if reponse is ready
// 	 * and not an error 
// 	 * Solo llama a la función 'responseHandler' 
// 	 * proporcionada por el usuario 
// 	 * si la respuesta está lista y no es un error */

// 	/** la func de manejo de respuesta toma nuestro objeto de solicitud original y
// 	 * la func de controlador de respuesta que nos proporciona nuestro usuario 
// 	 * esté usando toda esta biblioteca, toda esta biblioteca AjaxUtil */ 
// 	function handleResponse(request, responseHandler) {
// 		if ((request.readyState == 4) && //solicitar el estado de preparación, queremos asegurarnos de q ya hay 4 estados en esta solicitud
// 			(request.status == 200)) { // aquí  queremos comprobar q estado de nuestra solicitud es 200
// 			responseHandler(request); // al comprobar que las 2 condiciones se cumplen o son ciertas, entoces deberiamos usar el controlador de respuestas 'responseHandler', esa es la func q nos proporcionó el usuario de esta biblioteca
// 		}
// 	}

// 	/** Expose utility to the global object - Exponer la utilidad al objeto global. 
// 	 * queremos exponer esta utilidad a objetos globales para poder usarla realmente.
// 	 * Y lo q se va hacer es cambiar un poco el nombre diremos punto global y usaremos 
// 	 * el signo de $, así como JQuery usa signos de $, también como potencia de nueatra 
// 	 * variable */

// 	global.$ajaxUtils = ajaxUtils; //expondrá  al objeto global, será igual a nuestro ajaxUtils, q son los objetos localoes aquí mismo

// })(window);


/** VIDEO #57 (3ra parte): Conceptos básicos de AJAX */
// (function (global) {
// 	// Set up a namespace for our utility - Configurar un espacio de nombres para nuestra utilidad
// 	var ajaxUtils = {};

// 	// Return an HTTP resquest object - Devolver un objeto de solicitud HTTP
// 	function getRequestObject () {
// 		if (window.XMLHttpRequest) {
// 			return (new XMLHttpRequest());
// 		} else if (window.ActiveXObject) {
// 			// For very old IE browsers (optional) - Para navegadores IE muy antiguos (opcional)
// 			return (new ActiveXObject("Microsoft.XMLHTTP"));
// 		} else {
// 			global.alert("Ajax is not supported!");
// 			return (null);
// 		}
// 	}

// 	// Makes an AJAX GET request to 'requestURL' - Realiza una solicitud AJAX GET a 'requestURL'
// 	// Esta es la función principal 
// 	ajaxUtils.sendGetRequest = 
// 	function (requestUrl, responseHandler) {
// 		var request = getRequestObject(); 

// 		request.onreadystatechange = 
// 		function () { 
// 			handleResponse(request, responseHandler);
// 			//console.log(handleResponse);
// 		}; 

// 		request.open("GET", requestUrl, true);
// 		request.send(null); // for POST only - solo para correo
// 	};

// 	/** Only calls user provided 'responseHandler'
// 	 * function if reponse is ready
// 	 * and not an error 
// 	 * Solo llama a la función 'responseHandler' 
// 	 * proporcionada por el usuario 
// 	 * si la respuesta está lista y no es un error */

// 	function handleResponse(request, responseHandler) {
// 		if ((request.readyState == 4) && 
// 			(request.status == 200)) { 
// 			responseHandler(request); 
// 		}
// 	}

// 	/** Expose utility to the global object - Exponer la utilidad al objeto global. */
// 	global.$ajaxUtils = ajaxUtils;

// })(window);

/** VIDEO #58: JSON */
(function (global) {
	// Set up a namespace for our utility - Configurar un espacio de nombres para nuestra utilidad
	var ajaxUtils = {};

	// Return an HTTP resquest object - Devolver un objeto de solicitud HTTP
	function getRequestObject () {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		} else if (window.ActiveXObject) {
			// For very old IE browsers (optional) - Para navegadores IE muy antiguos (opcional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		} else {
			global.alert("Ajax is not supported!");
			return (null);
		}
	}

	// Makes an AJAX GET request to 'requestURL' - Realiza una solicitud AJAX GET a 'requestURL'
	// Esta es la función principal 
	ajaxUtils.sendGetRequest = 
	function (requestUrl, responseHandler, isJsonResponse) {
		var request = getRequestObject(); 

		request.onreadystatechange = 
		function () { // esta es una func anónima
			handleResponse(request, 
				responseHandler, 
				isJsonResponse);
		}; 

		request.open("GET", requestUrl, true);
		request.send(null); // for POST only - solo para correo
	};

	/** Only calls user provided 'responseHandler'
	 * function if reponse is ready
	 * and not an error 
	 * Solo llama a la función 'responseHandler' 
	 * proporcionada por el usuario 
	 * si la respuesta está lista y no es un error */

	function handleResponse(request, 
			responseHandler,
			isJsonResponse) {
		if ((request.readyState == 4) && 
			(request.status == 200)) {

			// Default to isJssonResponse = true
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}

			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			} else {
				responseHandler(request.responseText);
			}			
		}
	}

	/** Expose utility to the global object - Exponer la utilidad al objeto global. */
	global.$ajaxUtils = ajaxUtils;

})(window);