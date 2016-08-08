
$("#mainImage").fadeIn(1500);


var diff = ["one","two","three","four","five","six","seven","eight","nine","ten"]

var seasonOne = {
	filmNumber   : ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],
	filmName     : ['Destruction Derby','Hitman','Dead Or Alive','Never Say Never','Disney',
				    'Peter Pan','Gorilla Bandidos','Flapjack','J.C','Goodmann'],
	filmDate     : ['16/04/2013','06/04/2013','16/04/2013','12/04/2014','15/04/2014','12/04/2014',
				    '18/04/2014','23/04/2015','21/04/2015','28/04/2016',]
};

var seasonTwo = {
	filmNumber   : ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'],
	filmNameTwo  : ['Ragga Rockers','Hitman','Dead Or Alive','Never Say Never','Disney',
				    'Peter Pan','Gorilla Bandidos','Flapjack','J.C','Goodmann'],
	filmDateTwo  : ['16/04/2013','06/04/2013','16/04/2013','12/04/2014','15/04/2014','12/04/2014',
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
	'<p id='+ diff[i] + '>' + seasonTwo.filmNumber[i] + "</p>";

	document.getElementById("seasonNameTwo").innerHTML +=
	'<p>' + seasonTwo.filmNameTwo[i] + "</p>";

	document.getElementById("seasonDateTwo").innerHTML +=
	'<p>' + seasonTwo.filmDateTwo[i] + "</p>";

	}

}

/* all the ID from filmNumberOne */
var allIds = ["one","two","three","four","five","six","seven","eight","nine","ten"];

/* all img src */
/* 1 - shorten the filepath */
/* 2 - img name */
var pp = "img/imgGallery/";
var realSRC =[ pp + "One.jpg", pp + "Two.jpg",
			   pp + "Three.jpg", pp + "Four.jpg",
			   pp + "Five.jpg", pp + "Six.jpg",
			   pp + "Seven.jpg", pp + "Eight.jpg",
			   pp + "Nine.jpg", pp + "Ten.jpg",]			   

/* www.kirupa.com/html5/handling_events_for_many_elements.htm */
var theParent = document.querySelector("#filmNumberOne");
theParent.addEventListener("mouseover", changeIMG ,false);

var theParent = document.querySelector("#seasonNumberTwo");
theParent.addEventListener("mouseover", changeIMG ,false);


function changeIMG(e) {

	if (e.target !== e.currentTarget) {
		var hoverItem = e.target.id;

		for (i = 0 ; i < 10 ; i++){

			if(hoverItem === allIds[i]){

				document.getElementById("mainImage").src = realSRC[i];	
			}
		}
	e.stopPropagation();
 	}
 }


/* GOOGLE MAP INITMAP DON´T TOUCH */

      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.91387, lng: 10.75225},
          zoom: 12,
          styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: -100 }
              ]
            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { hue: 'black' },
                { saturation: 100 }
              ]
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]
        });
      }

/* END OF GOOGLE MAP INITMAP DON´T TOUCH */

