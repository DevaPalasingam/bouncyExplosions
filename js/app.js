


// document ready =============================================
$(document).ready(function() {

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	console.log(ctx);

	var balls = [];
	var mouse = {x: 0, y: 0};

	var winHeight = window.innerHeight;
	var winWidth = window.innerWidth;

	canvas.height = winHeight;
	canvas.width = winWidth;
	console.log("height = " + canvas.height);
	console.log("width = " + canvas.width);

});
// this closes document ready ================================