
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



var diff = ["one","two","three","four","five","six","seven","eight","nine","ten"]

var seasonOne = {
	filmNumber : ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],
	filmName   : ['Destruction Derby','Hitman','Dead Or Alive','Never Say Never','Disney',
				  'Peter Pan','Gorilla Bandidos','Flapjack','J.C','Goodmann'],
	filmDate   : ['16/04/2013','06/04/2013','16/04/2013','12/04/2014','15/04/2014','12/04/2014',
				  '18/04/2014','23/04/2015','21/04/2015','28/04/2016',]
};

  


addToPlaylist()

function addToPlaylist(){

	for(i = 0 ; i < 10 ; i++){

	document.getElementById("filmNumberOne").innerHTML += 
	'<p id='+ diff[i] + '>' + seasonOne.filmNumber[i] + "</p>";

	document.getElementById("filmNameOne").innerHTML +=
	'<p>' + seasonOne.filmName[i] + "</p>";

	document.getElementById("filmDateOne").innerHTML +=
	'<p>' + seasonOne.filmDate[i] + "</p>";
		
/* Season Two if there coming */

	document.getElementById("seasonNumberTwo").innerHTML += 
	'<p id='+ diff[i] + '>' + seasonOne.filmNumber[i] + "</p>";

	document.getElementById("seasonNameTwo").innerHTML +=
	'<p>' + seasonOne.filmName[i] + "</p>";

	document.getElementById("seasonDateTwo").innerHTML +=
	'<p>' + seasonOne.filmDate[i] + "</p>";

	}

}

function preloader() 

{

heavyImage = new Image(); 
heavyImage2 = new Image(); 
heavyImage3 = new Image(); 
heavyImage4 = new Image(); 
heavyImage5 = new Image(); 

heavyImage.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testOne.jpg";
heavyImage2.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testTwo.jpg";
heavyImage3.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testThree.jpg";
heavyImage4.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testFour.jpg";
heavyImage5.src = "file:///Users/Rene/Documents/git/awwwards-01/img/testFive.jpg";

}



function myFunction(){
	document.getElementById("nice").src="file:///Users/Rene/Documents/git/awwwards-01/img/testOne.jpg";
}


/* CHANGE IMG WHEN HOVER OVER TEXT (SEASON ONE) */

document.getElementById("one").addEventListener("mouseover", changeImage1);
document.getElementById("two").addEventListener("mouseover", changeColor2);
document.getElementById("three").addEventListener("mouseover", changeImage3);
document.getElementById("four").addEventListener("mouseover", changeColor4);
document.getElementById("five").addEventListener("mouseover", changeImage5);
document.getElementById("six").addEventListener("mouseover", changeColor6);
document.getElementById("seven").addEventListener("mouseover", changeImage7);
document.getElementById("eight").addEventListener("mouseover", changeColor8);
document.getElementById("nine").addEventListener("mouseover", changeImage9);
document.getElementById("ten").addEventListener("mouseover", changeColor10);




function changeImage1 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testOne.jpg";
		/*console.log("change image");*/ /* MESSAGE BACK TO SEE IF FUNCTION GOES */
	}

function changeColor2 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testTwo.jpg";
}

function changeImage3 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testThree.jpg";
		/*console.log("change image");*/ /* MESSAGE BACK TO SEE IF FUNCTION GOES */
	}

function changeColor4 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testFour.jpg";
}

function changeImage5 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testFive.jpg";
		/*console.log("change image");*/ /* MESSAGE BACK TO SEE IF FUNCTION GOES */
	}

function changeColor6 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testTwo.jpg";
}

function changeImage7 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testThree.jpg";
		/*console.log("change image");*/ /* MESSAGE BACK TO SEE IF FUNCTION GOES */
	}

function changeColor8 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testFour.jpg";
}

function changeImage9 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testThree.jpg";
		/*console.log("change image");*/ /* MESSAGE BACK TO SEE IF FUNCTION GOES */
	}

function changeColor10 (){
		document.getElementById("mainImage").src="file:///Users/Rene/Documents/git/awwwards-01/img/testFour.jpg";
}


      function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 44.540, lng: -78.546},
            zoom: 8
        });
      }

/*

season one hover effect added / color.
each episode in season one have their own image when mouseover.


output season one divs to horizontal insted og vertical


*/




