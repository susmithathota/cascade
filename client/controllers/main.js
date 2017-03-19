app.controller('mainController',function(){
	this.mainOptions = {
    // sectionsColor: ['grey', 'white', 'grey'],
	    navigation: false,
		controlArrows: true,
	    navigationPosition: 'right',
	    scrollingSpeed: 800,
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
	    },
		onSlideLeave: function (anchorLink, page, slide, direction, next) {
			console.log(next)
			console.log(slide)
			if(next == 3){
				$(".overlaySlide").addClass("noImage");
			} else {
				$(".overlaySlide").removeClass("noImage");
			}
        },
		afterRender: function () {
		            setInterval(function () {
		                $.fn.fullpage.moveSlideRight();
		            }, 4000);
		}
	 };
})