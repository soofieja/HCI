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
	$("#lab-weeks").click(function(){
		navigate("lab-weeks.html");
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
	$(".computer").click(function(){
		navigate("computer.html");
	});
	$(".unity").click(function(){
		navigate("unity.html");
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