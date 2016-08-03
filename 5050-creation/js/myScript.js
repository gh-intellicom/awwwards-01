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

document.getElementById("filmNumberOne").addEventListener("mouseover", changeColor);


function changeColor(){
	document.getElementById("lol").style.background = "red";

}


var seasonOne = {
	filmNumber : ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],
	filmName   : ['Destruction Derby','Hitman','Dead Or Alive'],
	filmDate   : ['16/04/2013','06/04/2013','16/04/2013','12/04/2014','15/04/2014','12/04/2014','18/04/2014','23/04/2015','21/04/2015','28/04/2016',]
};

/*
var movieNames = ["pokemon", "pokemon2","pokemon3","pokemon4","pokemon5",
				  "pokemon6","pokemon7","pokemon8","pokemon9","pokemon10"]

var movieColor = ["blue","red","yellow","green","purple","grey","pink"]		*/		  



addToPlaylist()

function addToPlaylist(){

	for(i = 0 ; i < 10 ; i++){
	document.getElementById("filmNumberOne").innerHTML += 
	'<p>' + seasonOne.filmNumber[i] + "</p>";

	document.getElementById("filmNameOne").innerHTML +=
	'<p>' + seasonOne.filmName[i] + "</p>";

	document.getElementById("filmDateOne").innerHTML +=
	'<p>' + seasonOne.filmDate[i] + "</p>";
	}	
}




filmNumberOne - filmNameOne - filmDateOne 