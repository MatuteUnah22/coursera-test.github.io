/** VIDEO #50 (parte 1): MATRICES 
 * Las matrices son solo una colección de datos */
// Arrays 
// var array = new Array(); // acá se crea la matriz o arreglo

// // de esta forma se rellena manualmente
// array[0] = "David Matute";
// array[1] = 2024;
// array[2] = function (name) {
// 	console.log("Helo " + name);
// };
// array[3] = { course: " HTML, CSS & JS"};

// console.log(array); 
// console.log(array[1]); // se especifica la posición del arrays que quiere mostrarse
// array[2](array[0]); // llama a la función y le pasa el 'name', para imprimir 'Hola David...'
// console.log(array[3].course); // llama al objeto para imprimirlo en consola

// Tmabién se puede crear matrices usando una imitación de matriz abreviada
// Short hand array creation
// var names = ["David", "Matute", "Doe"];

// console.log(names);

// for (var i = 0; i < names.length; i++) { //recorrera toda la matriz
// 	console.log("Hola " + names[i]); // e imprimirá cada posición de la matriz
// }

/** VIDEO #50 (2da parte):  */
// Hay un bucle especial que puedes usar para recorrer las propiedades de un objeto
//var names2 = ["David", "Matute", "Doe"];
// var myObj = {
// 	name: "David",
// 	course: "HTML/CSS/JS",
// 	plataform: "Coursera",
// };

// // Bucle
// for ( var prop in myObj) { /* Básicamente dirá: "Quiero apoderarme de todas las
// propiedades de mi objeto". Por lo tanto, es muy práctico para los objetos,
// porque los objetos en realidad no tienen índices como los tiene una matriz,
// sino que tienen propiedades. */
// 	console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
// 	console.log("Hola " + names2[name]);
// }

// var counter = 0;
// var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
// for (var i = 0; i < myArray.length; i++) {
//   counter++;
// }
// console.log(counter);


/** VIDEO #51: CLOSURES --> Cierres */
// function makeMultiplier (multiplier) {
// 	// multiplier = 2;

// 	function b () {
// 		console.log("Multiplier is: " + multiplier);
// 	}

// 	b();

// 	return (
// 		function (x) {
// 			console.log("X is: " + x); // x = 10; ya que se le está dando el valor en "doubleAll(10)".
// 			return multiplier * x;
// 		}
// 	);
// }

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10));

/** VIDEO #52 (parte 1): FAKE NAMESPACES --> 
 * Una forma de resolverl la situación es introducir espacios de nombres,
 * y un espacio de nombres es básicamente un contenedor para algunas funciones
 * y para algunas declaraciones. Lo único es que JS realmente no tiene los 
 * espacios de nombres que tienen otros lenguajes. Sin embargo, en JS 
 * podríamos falsificar los espacios de nombres con mucha facilidad. Se 
 * declara una variable con el sobrenombre "nombreGreeter" y se asiigna un
 *  objeto vacio
 * ej.: nameGreeter = {}; */

//var davidGreeter = {};
////var name = "David";
//davidGreeter.name = "David";

////function sayHello () {
////	console.log("Hello " + name);
////}

//davidGreeter.sayHello = function () {
//	console.log("Hello " + davidGreeter.name);
//}

/** VIDEO #52 (parte 2): Immediately Invoked Function Expressions (IIFEs) */
// Expresión de función de invocación inmediata

//(function () {
//	console.log("Hello Coursera!");
//})(); 

/** Al encerrar una función entre parentesis (fucntion () {}), 
 * y luego agregar al final de nuevo los parentesis "();", se 
 * está creando Expresión de función de invocación inmediata. 
 * También se le pueda dar argumentos dentro de las funciones. 
 * Como en el ej de arriba */

(function (window){
	var davidGreeter = {};

	davidGreeter.name = "David";
	var greeter = "Hello ";

	davidGreeter.sayHello = function () {
		console.log(greeter + davidGreeter.name);
	}

	window.davidGreeter = davidGreeter;
})(window);
