/** VIDEO #45: */
// Object creation --> Creación de objetos con notación de punto

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object(); // así que, se debe crear el objeto 1ro
// company.ceo.firstName = "Mark"; // al querer agregar mas objetos sin haberlo creado genera un error
// company.ceo.favColor = "Blue"; // al querer agregar mas objetos sin haberlo creado genera un error

// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstName);

// // Para acceder a la propiedades mediante la notación de corchetes "[]".
// console.log(company["name"]);

// //company.$stock = 110;
// //company["stock of company"] = 110;
// //console.log("Stock price is: " + company["stock of company"]); 

// var stockPropName = "stock of company"; // Otra forma de guardar un nombre con espacios en una variable. para no tener problemas
// company[stockPropName] = 110;

// console.log("Stock price is: " + company[stockPropName]);


/** VIDEO #45 (2da parte): Notación literal de objetos */
// Better way: Object literal (una forma mejor: objeto literal)

// var facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "Blue",
// 	},
// 	//stockPropName: { "stock of company": 110,	}
// 	"stock of company": 110
// }; //al definir un objeto, siempre es bueno colocar el ";" desde el principio

// console.log(facebook);
// console.log(facebook.ceo.firstName);

/** VIDEO #46: FUNCIONES */
/**
 * Functions are First-Class Data --> en JS son lo que se llama tipos de datos de 1ra clase.
 * Functions are Objects --> Las funciones en JS son objetos normales que tienen algunas propiedades especiales */

// function multiply (x, y) {
// 	return x * y;
// }

// console.log(multiply(3, 4));
// console.log(typeof multiply);
// console.log(multiply);

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// // Function factory
// function makeMultiplier (multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	};

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3); // multiplicara por 3
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2); // multiplicara por 2
// console.log(doubleAll(100));

// // Passing functions as arguments
// function doOperationOn (x, operation) {
// 	return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(100, doubleAll);
// console.log(result);

/** VIDEO #47(parte 1) :  */
// Pasar variables por valor en lugar de hacerlo por referencia

/**
 * el copiar por valor no afecta en la posición de memoria
 * pero cambia elvalor de la variable al ser modificada */


/** VIDEO #47(parte 2) :  */
// Copy by reference VS by value

// Copy by reference

// var a = 7;
// var b = a;

// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update: ");
// console.log("a: " + a);
// console.log("b: " + b);

// Copy by value
// var a = { x: 7 };
// var b = a;

// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);

// Pass by reference VS by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);

// Tercer ejercicio y, se esta pasando un objeto a una función
// function changeObject(objValue) {
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x = 5;
// 	console.log("after changeObject, orig value:");
// 	console.log(objValue);

// }

// var value = {x: 7};
// changeObject(value); // primValue = value
// console.log("after changeObject, orig value:");
// console.log(value);  // cambiara el valor a 'x = 5', por qué están afectando a la misma ubicación de memoria, por lo que afectan a los mismos valores.

/** VIDEO #48: Contructores de funciones, prototipos y la palabra clave 'THIS' */
// una forma mas de crear objetos en JS. Los constructores por convención se empiezan con la 1ra letra en mayúscula.
// ya que no se trata de una función normal, sino de un contructor de funciones y debe de usarse la palabra clave 'new'.

// Function construcctors
// function Circle (radius) {
// 	this.radius = radius;

// 	// this.getArea = function () {
// 	// 	return Math.PI * Math.pow(this.radius, 2); //pow (potencia). el 2 será el valor de la potencia que se repetirá o elevará.
// 	// };
// }

// Circle.prototype.getArea = function() { // este constructor solo se creara una sola vez, y la propiedad que se establezca en ella solo se cree una vez y no se cree para cada instancia de ese objeto
// 	return Math.PI * Math.pow(this.radius, 2);
// };

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());
// //console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle.getArea());

/** VIDEO #49: Literales de objeto y la palabra clave 'THIS' */
// Object literañs and "this"

// var literalCircle = { //new Object()
// 	radius: 10,

// 	getArea: function () {
// 		//console.log(this);
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();