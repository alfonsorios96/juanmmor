$(function () {
    
	//Background images slider
	$('.backgroundSlider').supersized({
		slide_interval : 5000, // Length between transitions
		transition : 6, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed : 500, // Speed of transition
		slide_links : false, // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides : [
			{image : 'images/bg1.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg6.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg2.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg3.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg4.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg7.jpg', title : '', thumb : '', url : ''},
			{image : 'images/bg5.jpg', title : '', thumb : '', url : ''}
		]
	});
        
        var autoplay = false;
        if($(window).width() >= 992)
        {
            autoplay = true;
            $("#bgndVideo").mb_YTPlayer();
        }

        
	//Text slider
	$('#text_slider').cycle({
		fx : 'fade',
		timeout: 4000,
		speed: 900,
		slides: '.slide'
	});
    
	//Countdown
	$("#countdown").countdown({
            until: someDate, 
            padZeroes: true,
            layout: $("#countdown").html()
	});
        
	//Submit Newsletter form to PHP file
	$("#form_newsletter").submit(function(event) {
	    
		//stop form from submitting normally
		event.preventDefault();

		//get some values from elements on the page:
		var $form = $( this );

		$("#form_newsletter button").attr("disabled", "disabled");

		//Send the data using post
		var posting = $.post( 'process_form.php', $form.serialize() );

		//Show result
		posting.done(function( data ) {

			$("#form_newsletter button").removeAttr('disabled');

			$("#form_newsletter_result").hide().html(data).fadeIn();
		});
	});
    
	//About us (Open / Close)
	$(".open_aboutus").click(function() {
		$("#about_us").removeClass('animated fadeOut').addClass('animated fadeIn').fadeIn();
	});

	$(".close_aboutus").click(function() {
		$("#about_us").removeClass('animated fadeIn').addClass('animated fadeOut').fadeOut();
	});
		
});

var someDate = new Date("2016-11-8");
var numberOfDaysToAdd = 60;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 