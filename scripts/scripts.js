$(function() {
	listeners();
});

function listeners() {

	$("#home").click(function(){
		navigate("index.html");
	});
	$("#topics").click(function(){
		navigate("topics.html");
	});
	$("#workshops").click(function(){
		navigate("workshops.html");
	});
	$("#excursion").click(function(){
		navigate("excursion.html");
	});
	$("#labweeks").click(function(){
		navigate("labweeks.html");
	});
	$(".wearables").click(function(){
		navigate("wearables.html");
	});
	$(".playful-interactions").click(function(){
		navigate("playful-interactions.html");
	});
	$(".artificial-creatures").click(function(){
		navigate("artificial-creatures.html");
	});
	$(".vr-ar").click(function(){
		navigate("vr-ar.html");
	});
	$(".arduino").click(function(){
		navigate("arduino.html");
	});
	$(".vr-environments").click(function(){
		navigate("vr-environments.html");
	});
	$(".computervision").click(function(){
		navigate("computervision.html");
	});
	
}

function navigate(page) {
	window.location = page;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}