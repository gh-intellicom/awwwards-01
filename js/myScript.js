/*
document.getElementById("season-1").onmouseover = function() {mouseOver()};
document.getElementById("season-1").onmouseout = function() {mouseOut()};
*/

/*

function mouseOver(){

	document.getElementById("nothing").style.background = "#9e9c9c";
	console.log("red")
}

function mouseOut(){
	document.getElementById("nothing").style.background = "black";
}
*/

/*var my_image = new Image();

// we will call this function when the image has finished loading
function notify_complete()
{
    alert('The image has been loaded into the browser cache.');
}

function load_image()
{
    // call the notify_complete function when the image has loaded
    my_image.onload = notify_complete;

    // load the image
    my_image.src = "img/gallery/1.jpg";
}*/




var diff = ["one","two","three","four","five","six","sever","eight","nine","ten"]

var seasonOne = {
	filmNumber : ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],
	filmName   : ['Destruction Derby','Hitman','Dead Or Alive'],
	filmDate   : ['16/04/2013','06/04/2013','16/04/2013','12/04/2014','15/04/2014','12/04/2014',
				  '18/04/2014','23/04/2015','21/04/2015','28/04/2016',]
};

/*
var movieNames = ["pokemon", "pokemon2","pokemon3","pokemon4","pokemon5",
				  "pokemon6","pokemon7","pokemon8","pokemon9","pokemon10"]

var movieColor = ["blue","red","yellow","green","purple","grey","pink"]		*/		  



addToPlaylist()

function addToPlaylist(){

	for(i = 0 ; i < 10 ; i++){
	document.getElementById("filmNumberOne").innerHTML += 
	'<p id='+ diff[i] + '>' + seasonOne.filmNumber[i] + "</p>";

	document.getElementById("filmNameOne").innerHTML +=
	'<p>' + seasonOne.filmName[i] + "</p>";

	document.getElementById("filmDateOne").innerHTML +=
	'<p>' + seasonOne.filmDate[i] + "</p>";
	}	
}




var color = "red";

document.getElementById("one").addEventListener("mouseover", changeColor1);
document.getElementById("two").addEventListener("mouseover", changeColor2);




function changeColor1 (){
	if(color == "red"){
		document.getElementById("lol").style.background = "white";
	}
	else {
	color = document.getElementById("lol").style.background = "red";
}}





function changeColor2 (){
	document.getElementById("lol").style.background = "green";
}









