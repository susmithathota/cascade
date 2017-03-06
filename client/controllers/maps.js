app.controller('mapsController',function($scope){
	var geocoder=new google.maps.Geocoder();
	var latlng=new google.maps.LatLng(-34.397,150.644)
	var mapOptions={
		zoom:15,
		center:latlng
	}
	var map=new google.maps.Map(document.getElementById('map'),mapOptions);
	
	$scope.codeAddress=function(){
		// $scope.inputAddress='Swedish Medical Center 751 Northeast Blakely Drive,Issaquah, WA 98029';
		$scope.inputAddress="EvergreenHealth Professional Center 12303 NE 130th Lane Kirkland, WA 98034"
		geocoder.geocode({'address':$scope.inputAddress},function(result,status){
			if(status=='OK'){
				map.setCenter(result[0].geometry.location);
				var marker=new google.maps.Marker({
					map:map,
					position:result[0].geometry.location
				});
			}
			else{
				console.log('err');
			}
		})
	}
	$('#bellevue').on('show.bs.modal', function () {
	  $scope.codeAddress();
	})

})