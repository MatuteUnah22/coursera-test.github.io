//var name = "Matute";

//function sayHi () {
//	console.log("Hi " + name);
//}

(function (window) {
	var matuteGreeter = {};

	matuteGreeter.name = "Matute";

	matuteGreeter.sayHi = function () {
		console.log("Hello " + matuteGreeter.name);
	}

	window.matuteGreeter = matuteGreeter;
	
})(window);