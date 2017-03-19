app.controller('mapsController',function($scope){
    var geocoder;
    var map;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 11,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions);
	$scope.codeAddress=function() {
	    $scope.locations=["EvergreenHealth Professional Center 12303 NE 130th Lane Kirkland, WA 98034",
	    				  "Swedish Medical Center 751 Northeast Blakely Drive,Issaquah, WA 98029",
	    				  "2015 116th Ave NE Bellevue, WA 98004"];
	    for(var i=0;i<$scope.locations.length;i++)
	    {
		    geocoder.geocode( { 'address': $scope.locations[i]}, function(results, status) {
		      if (status == 'OK') {
		        map.setCenter(results[0].geometry.location);
		        var marker = new google.maps.Marker({
		            map: map,
		            position: results[0].geometry.location
		        });
		      } else {
		        alert('Geocode was not successful for the following reason: ' + status);
		      }
		    });
		}
		map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
	 
	}
	$scope.codeAddress(); 

	$scope.addressInfo=[{location:"BELLEVUE",address:"2015 116th Ave NE Bellevue, WA 98004",phoneNumber:"425-453-8406",hoursToday:"9:00 AM - 5:00 PM",directions:"https://www.google.com/maps/place/2015+116th+Ave+NE,+Bellevue,+WA+98004/@47.6284305,-122.1881407,17z/data=!3m1!4b1!4m5!3m4!1s0x54906cee40851091:0x16820b8855b2f875!8m2!3d47.6284269!4d-122.1859467"},
						{location:"KIRKLAND",address:"EvergreenHealth Professional Center 12303 NE 130th Lane Kirkland, WA 98034",phoneNumber:"425-899-4682",hoursToday:"9:00 AM - 5:00 PM",directions:"https://www.google.com/maps/search/EvergreenHealth+Professional+Center+12303+NE+130th+Lane+Kirkland,+WA+98034/@47.7161091,-122.179161,17z/data=!3m1!4b1"},
						{location:"ISSAQUAH",address:"Swedish Medical Center 751 Northeast Blakely Drive,Issaquah, WA 98029",phoneNumber:"425-313-5253",hoursToday:"9:00 AM - 5:00 PM",directions:"https://www.google.com/maps/search/Swedish+Medical+Center+751+Northeast+Blakely+Drive,Issaquah,+WA+98029/@47.5361305,-122.0240291,17z/data=!3m1!4b1"}];
});

