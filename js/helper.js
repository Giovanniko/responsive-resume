/*
These are HTML strings. As part of the course, you'll be using JavaScript functions to
replace the %data% placeholder text you see in them.
*/
var HTMLheaderStart = '<div id="headStart" class="raised-font"></div>';
var HTMLheaderName = '<h1 class="raised-font name">%data%</h1>';
var HTMLheaderRole = '<span class="raised-font role">%data%</span><hr class="top-hr">';

var HTMLcontactGeneric = '<li class="flex-item"><span class="raised-font">%contact%</span><span class="raised-font">%data%</span></li>';
var HTMLtopContacts = '<ul id="topContacts" class="flex-box contacts"></ul>';
var HTMLmobile = '<li class="flex-item"><span class="raised-font">mobile</span><span class="raised-font">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="raised-font">email</span><span class="raised-font">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="raised-font">twitter</span><span class="raised-font">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="raised-font">github</span><span class="raised-font">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="raised-font">blog</span><span class="raised-font">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="raised-font">location</span><span class="raised-font">%data%</span></li>';

var HTMLbiopic = '<img src="%data%" class="biopic" alt="employee picture of choice">';
var HTMLwelcomeMessage = '<span class="welcome-message raised-font">%data%</span>';

var HTMLskillsStart = '<h2 class="raised-font skills-h2">Skills at a Glance:</h2><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="raised-font">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="link work-emp" href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="work-des">%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a class="link proj-title" href="#" target="_blank">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p class="proj-des">%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="modal-pictures" alt="project pictures">';

/*Start of extra HTML added on for my particular project*/
var HTMLcameraIcon  = '<img src="%data%" class="icon" alt="camera icon" title="Project screenshots" data-toggle="modal" data-target="#%project%">';
var HTMLimageAnchor = '<a href="%data%" class="full-image" id="%imgNumber%" target="_blank"></a>';//new
var HTMLimageColumn = '<div class="image-column" id="%data%"></div>';
/*End of extra HTML*/

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a class="link edu-school" href="#" target="_blank">%data%</a>';
var HTMLschoolDegree = '<div class="edu-degree">%data%</div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="edu-major">Major: %data%</div>';

var HTMLonlineClasses = '<h2 class="embossed-title">Online Classes</h2>';
var HTMLonlineTitle = '<a class="link edu-course" href="#" target="_blank">%data%</a>';
var HTMLonlineSchool = '<div class="edu-school">%data%</div>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a class="link" href="#" target="_blank">%data%</a>';

var googleMap = '<div id="map" class="flex-box"></div>';

var HTMLconnectFacebook = '<a  href="%data%" class="zocial-facebook" target="_blank">Facebook</a>';
var HTMLconnectLinkedin = '<a  href="%data%" class="zocial-linkedin" target="_blank">Linked-in</a>';
var HTMLconnectTwitter = '<a  href="%data%" class="zocial-twitter" target="_blank">Twitter</a>';

var myIcon = './images/google-map-pointer-grey.svg';

/*Google Map*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;
  
  /*Options used to format the map in grey color scheme from
  "https://snazzymaps.com/style/15/subtle-grayscale"*/  
  var mapOptions = {
    disableDefaultUI: true,//no zoom or streetview icons.
    styles:[
              {
                  "featureType": "administrative",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "administrative.province",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": -100
                      },
                      {
                          "lightness": 65
                      },
                      {
                          "visibility": "on"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": -100
                      },
                      {
                          "lightness": "50"
                      },
                      {
                          "visibility": "simplified"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": "-100"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "all",
                  "stylers": [
                      {
                          "visibility": "simplified"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "all",
                  "stylers": [
                      {
                          "lightness": "30"
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "all",
                  "stylers": [
                      {
                          "lightness": "40"
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "elementType": "all",
                  "stylers": [
                      {
                          "saturation": -100
                      },
                      {
                          "visibility": "simplified"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "hue": "#ffff00"
                      },
                      {
                          "lightness": -25
                      },
                      {
                          "saturation": -97
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "labels",
                  "stylers": [
                      {
                          "lightness": -25
                      },
                      {
                          "saturation": -100
                      }
                  ]
              }
            ]
    
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  
  function locationFinder() {

    var locations = [];
    locations.push(bio.contacts.location);
    
    // iterates through school locations and appends each location to the locations array.
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to the locations array.
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window
    
    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      //icon: 'http://labs.google.com/ridefinder/images/mm_20_gray.png'
      icon: './images/mm_20_gray.png'
      
      //Other marker options could be:
      /*{
              path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale:2,
              strokeOpacity: 10
      }*/

      //'./images/google-map-greyoutline-marker-small.png'
      //myIcon
      //'http://labs.google.com/ridefinder/images/mm_20_gray.png'
      
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

   google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(6);
      map.setCenter(marker.getPosition());
      infoWindow.setContent('<h6>' + marker.title + '</h6>');
      infoWindow.open(map, marker);
    });
    
    bounds.extend(new google.maps.LatLng(lat, lon));// this is where the pin actually gets added to the map.
                                                    // bounds.extend() takes in a map location object
    map.fitBounds(bounds);// fit the map to the new marker
    
    map.setCenter(bounds.getCenter());// center the map
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);//calls function createMapMarker
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.

    var service = new google.maps.places.PlacesService(map);

      // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object

      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
//Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});