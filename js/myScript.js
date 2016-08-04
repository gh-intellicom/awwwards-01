function preloader() 

{
     // counter
     var i = 0;


     // create object
     imageObj = new Image();


     // set image list
     images = new Array();
     images[0]="img/testOne.jpg"
     images[1]="img/testTwo.jpg"



     // start preloading
     for(i=0; i<=2; i++) 
     {
          imageObj.src=images[i];
     }

}


/*my_image = new Image();

my_image.onload = function(){
	console.log("loaded");
}

my_image.src = "img/testOne.jpg";

*/



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

var space = "col-sm-12";

addToPlaylist()

function addToPlaylist(){

	for(i = 0 ; i < 10 ; i++){
	document.getElementById("filmNumberOne").innerHTML += 
	'<p id='+ diff[i] + '>' + seasonOne.filmNumber[i] + "</p>";

	document.getElementById("filmNameOne").innerHTML +=
	'<p>' + seasonOne.filmName[i] + "</p>";

	document.getElementById("filmDateOne").innerHTML +=
	'<p>' + seasonOne.filmDate[i] + "</p>";
		


	document.getElementById("secondSeason").innerHTML +=
	'<div class=' + 'col-md-12' + '>' +
	'<div class=' + 'col-md-6 col-sm-4' + '>' + '<p>First film</p>' + '</div>' +
	'<div class=' + 'col-md-2 col-sm-4' + '>' + '<p>Killer</p>' + '</div>' +
	'<div class=' + 'col-md-2 col-sm-4' + '>' + '<p>15/03/2014</p>' + '</div>' +
	'</div>' ;

	}
}


function preloader() 

{

heavyImage = new Image(); 
heavyImage2 = new Image(); 

heavyImage.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testOne.jpg";
heavyImage2.src = "img/testTwo.jpg";

}



function myFunction(){
	document.getElementById("nice").src="file:///Users/Rene/Documents/git/awwwards-01/img/testOne.jpg";
}

/*var color = "red";

document.getElementById("one").addEventListener("mouseover", changeColor1);
document.getElementById("two").addEventListener("mouseover", changeColor2);




function changeColor1 (){
		document.getElementById("lol").src = my_image;
	}



function changeColor2 (){
	document.getElementById("lol").style.background = "green";
}
*/








