$(function () { // Same as document.addEventListener("DOMContentLoaded")
	// Same as document.querySelector("#navbarToggle").addEventListener("blur", ...
	// $("#navbarToggle").blur(function (event) { // <-- Hace la misma func que el document.querySelector...
	// 	var screenWidth = window.innerWidth;

	// 	if (screenWidth < 767.20) {
	// 	// if (screenWidth < 768) {
	// 		$("#collapsable-nav").collapse('hide');
	// 	}
	// });
	$("#navbarToggle").blur(function (event) {
	    var screenWidth = window.innerWidth;
	    if (screenWidth < 768) {
	      $("#collapsable-nav").collapse('hide');
	    }
	});

	$("#navbarToggle").click(function (event) {
		$(event.target).focus();
	});
});

// CÓDIGO DEL REPOSITORIO DEL CURSO
// $(function () { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

//   // In Firefox and Safari, the click event doesn't retain the focus
//   // on the clicked button. Therefore, the blur event will not fire on
//   // user clicking somewhere else in the page and the blur event handler
//   // which is set up above will not be called.
//   // Refer to issue #28 in the repo.
//   // Solution: force focus on the element that the click event fired on
//   // $("#navbarToggle").click(function (event) {
//   //   $(event.target).focus();
//   // });
// });