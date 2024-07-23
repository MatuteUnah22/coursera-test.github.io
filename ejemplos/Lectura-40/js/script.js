//var x = 'Hello World!';

/** VIDEO #41
 * var message = "in global";
 * console.log("global: message = " + message);
 * var a = function () {
 * 	var message = "inside a";
 * 	console.log("a: message = " + message);
 * 	b():
 * }
 * function b () {
 * 	console.log("b: message = " + message);
 * }
 * 
 * a();
 * 
 * var x = function () {
 * 	console.log("Hello World");
 * 	return ;
 * };
 * x();
 * x = "hello, I am a new value!";
 * console.log(x);
 * */

/** VIDEO #42 */
// Dedería estar indefinida

/*var x;
//console.log(X);

if (x == undefined) {
	console.log("x is undefined");
}

x = 5;

if (x == undefined) {
	console.log("x is undefined");
}
else {
	console.log("x has been defined"); //ha sido definido
}*/

/** VIDEO #43 */

/** String concatination */

// var string = "Hello";
// string += " World"; //string = string + " World"; es lo mismo

// console.log(string + "!!!");

// /** Regular math operatition +, -, *, / */
// console.log((5 + 4)/3);
// console.log((18 - 6)/3);
// console.log(undefined / 3); //NaN: es un simbolo especial que no indica un número Ese será el resultado, ya que no se puede dividir 
// function test1 (a) {
// 	console.log(a / 5);
// }

// test1();

/** Equality Regular */
// var x = 4, y = 4;

// if(x == y) {
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";

//  if(x == y) {
// 	console.log("x='4' is equal to y=4"); //lo que está pasando aquí se llama coerción de tipos
// }

/** Strict Equality */
/*var x = "4", y = 4;

if(x === y) { // La igualdad estricta se indica al usar 3 iguales pegados '==='.
	console.log("x='4' is equal to y=4");
} else {
	console.log("Strict: x='4' is NOT equal to y=4");
}
*/

/** If statement (all false) */
// if(false || null || undefined || "" || 0 || NaN) { // La igualdad estricta se indica al usar 3 iguales pegados '==='.
// 	console.log("This line won't ever execute");
// } else {
// 	console.log("All false");
// }

// /** If statement (all true) */
// if(true && "hello" && 1 && -1 && "false") { // La igualdad estricta se indica al usar 3 iguales pegados '==='.
// 	console.log("All true");
// }

/** Best practice for {} style 
 *  Curly brace on the same or next line..
 *  Is it just a style? */ // Mejores practicas para el estilo de llave en la misma o en la sig línea ¿Es solo un estilo?

// function a () 
// {
// 	return // al ejecutar la función, el motor de JS le agrega un ";" al "return" y ejecuta el sig blq de cód, y no se encuentra asignado a ninguna variable; por lo tanto, no esta definido  
// 	{
// 		name: "David"
// 	};
// }

// function b () {
// 	return {
// 		name: "Matute"
// 	};
// }

// console.log(a());
// console.log(b());

/** For loop (Bucle) */
// var sum = 0;

// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum += i;
// 	//sum = sum + i;
// }

// console.log("sum of 0 through 9 is: " + sum); //La suma del 0 al 9 es:

/** VIDEO #44: Default values */
// function orderChickenWith(sideDish) { //guarnición (sideDish)
// 	if (sideDish === undefined) {
// 		sideDish = 'whatever!';
// 	}

// 	console.log("Chiken with " + sideDish); //Pollo con fideos (Chiken with noodles)
// }

// orderChickenWith("noodles");
// orderChickenWith();


