app.controller('mainController',function(){
	this.mainOptions = {
    // sectionsColor: ['grey', 'white', 'grey'],
	    navigation: false,
	    navigationPosition: 'right',
	    scrollingSpeed: 500,
	    anchors: ['Home', 'Providers', 'Location', 'Contact', 'Patient Center'],
	    menu:'#menu',
	    onLeave : function ( index, nextIndex, direction){
	    	if(index){
	    		$("li a").css("color","green")
	    	}
			console.log(index);
	    }
	 };
})