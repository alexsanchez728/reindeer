var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var colorsCount = reindeer.length;
var hohohoElement = document.getElementById("reindeer");


for (var i = 0; i < colorsCount; i++) {

	
	var colorRun = colors[i];
	
	var reindeerRun = reindeer[i];

	var hohohoString = "";

	hohohoString += '<p>' + colorRun + " " + reindeerRun + '</p>';

	hohohoElement.innerHTML += hohohoString;

}