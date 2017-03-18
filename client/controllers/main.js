app.controller('mainController',function(){
	this.mainOptions = {
    // sectionsColor: ['grey', 'white', 'grey'],
	    navigation: false,
	    navigationPosition: 'right',
	    scrollingSpeed: 500,
	    anchors: ['home', 'providers', 'location', 'contact', 'patient center'],
	    menu:'#menu',
	    onLeave : function ( index, nextIndex, direction){
	    	if(nextIndex == 1){
	    		$(".navbar").removeClass("non-carousel-nav");
				$(".overlaySlide").show();
	    	} else {
				$(".navbar").addClass("non-carousel-nav");
				$(".overlaySlide").hide();
			}
			console.log(index);
	    }
	 };
})