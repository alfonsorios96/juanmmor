$(function () {
    
	//Background images slider
	$('.backgroundSlider').supersized({
		slide_interval : 4000, // Length between transitions
		transition : 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed : 100, // Speed of transition
		slide_links : false, // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides : [
			{image : 'images/bg1.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg2.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg3.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg4.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg5.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg6.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg7.jpg', title : '', thumb : '', url : ''}
		]
	});
        
	//Text slider
	$('#text_slider').cycle({
		fx : 'fade',
		timeout: 4000,
		speed: 900,
		slides: '.slide'
	});
    	
});