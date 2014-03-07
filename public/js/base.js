'use strict';

//Initialize the user's stress level
//localStorage.setItem("userStressLevel", 0);

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

/*	$('.ui-slider-handle').on('mouseup', function(e) {
		console.log('working?');

		$.get('/content', contentAJAX);
	});*/

	$('#slider-fill').on('change', function(e) {
		console.log('working?');

		//update the user's current stress level
		var ponce2 = localStorage.getItem("userStressLevel");
		console.log(ponce2);

		var stressLevel = $("#slider-fill").val();
		localStorage.setItem("userStressLevel", stressLevel);

		//print to check it's value has been updated
		var ponce = localStorage.getItem("userStressLevel");
		console.log(ponce);
		//$.get('/content', contentAJAX);
	});

	//Set User's Initial Stress Level
	//$('#slider-user-stress').val(userStressLevel);


	$.get('/content', contentAJAX);

	$.get('/userData', userDataAJAX);

	//Hide User Stress Handle
	/*$('<input>').appendTo('[ data-role="content"]').attr({'name':'stress-progress','id':'stress-progress',
	 'data-highlight':'true','min':'0','max':'100','value':'50','type':'range'}).slider({
        create: function( event, ui ) {
            $(this).parent().find('input').hide();
            $(this).parent().find('input').css('margin-left','-9999px'); // Fix for some FF versions
            $(this).parent().find('.ui-slider-track').css('margin','0 15px 0 15px');
            $(this).parent().find('.ui-slider-handle').hide();
            $(this).parent().find('.ui-disabled').removeClass('ui-disabled');
            //$(this).parent().unbind('click');
            //$(this).parent().unbind('mousedown');
            /*$(this).parent().find('ui-slider').unbind('click');
            $(this).parent().find('ui-slider').unbind('mousedown');
        }
    }).slider("refresh");*/
	
/*	$("#stress-progress").slider({
		create: function( event, ui ) {
            $(this).parent().find('input').hide();
            $(this).parent().find('input').css('margin-left','-9999px'); // Fix for some FF versions
            $(this).parent().find('.ui-slider-track').css('margin','0 15px 0 15px');
            $(this).parent().find('.ui-slider-handle').hide();
            $(this).parent().find('.ui-disabled').removeClass('ui-disabled');
            //$(this).parent().unbind('click');
            //$(this).parent().unbind('mousedown');
            /*$(this).parent().find('ui-slider').unbind('click');
            $(this).parent().find('ui-slider').unbind('mousedown');*/
 /*       }
	}).slider("refresh");
	$("#stress-progress").val(localStorage.getItem("lastname")).slider("refresh");
    //Disable user changing of slider value*/
//$('input[disabled]').parent().find('.ui-disabled').removeClass('ui-disabled');

	$('.ui-btn').click(function(e){
		ga("send","event","like","click");
	});
	$('#like').click(function(e) {

		var ponce3 = localStorage.getItem("userStressLevel");
		console.log("Stress Level: ", ponce3);
		
		//Increment user stress level towards happy
		var stressLevel = 10;
		stressLevel = stressLevel + 10;
		//console.log(stressLevel);

		//Update user's stress indicator
		//$("#slider-user-stress").val(stressLevel);

		$.get('/content', contentAJAX);
		console.log('Like Clicked:');
	});

	$('#dislike').click(function(e) {

		//var sliderValue = $("#slider-fill").val();
		//$("#slider-fill").val() = sliderValue + 10;

		$.get('/content', contentAJAX);
		console.log('Dislike Clicked:');
	});

	/* Highlight active menu item */
	$('.navbar-default .navbar-nav>li>a').click(function(e) {
        $('a').removeClass('active');
    });
}

function requestUserStressLevel(e) {
	console.log("Need user data");

	var url = "/userData";
	$.get(url, getUserData);
	console.log(url);
}

function getUserStressLevel(result) {
	var userData = result[0];
	var userStressLevel = userData.userStressLevel;

	console.log(userStressLevel);
}

function requestUserName(e) {
	console.log("Need user data");

	var url = "/userData";
	$.get(url, getUserData);
	console.log(url);
}

function getUserName(result) {
	var userData = result[0];
	var userName = userData.userName;

	console.log(userName);
}

function contentAJAX(ajaxResult) {
	var content = ajaxResult[Math.floor(ajaxResult.length * Math.random())];
	var url = content.location;
	var description = content.content;
	var contentType = content.type;

	console.log(contentType);

	$('#content-wrapper').empty();

	if (contentType === 'video' || contentType === 'music') {
		$('<iframe>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '250px');

		$('#content-wrapper iframe').attr({
			src: url+'?autoplay=1',
			width:'100%',
			height:'100%',
			margin: '0 auto 0 auto',
		});
	}

	if (contentType === 'picture') {
		$('<img>').appendTo('#content-wrapper');
		$('#content-wrapper').css('height', '100%');

		$('#content-wrapper img').attr({
			src: url,
			width: '100%',
			height: 'auto',
			margin: '0 auto 0 auto',
		});
	}

	if (contentType === 'quote') {
		$('<p>').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper p').css('height', '250px');
		$('#content-wrapper').css('height', '250px');
	}

	if (contentType === 'challenge') {
		$('<p>').appendTo('#content-wrapper');
		$('#content-wrapper p').text(description);
		$('#content-wrapper p').css('height', '250px');
		$('#content-wrapper').css('height', '250px');
	}

}


/*
 * JPANEL MENU
 */
// @codekit-prepend lib/modernizr-2.6.1.min.js
// @codekit-prepend lib/respond.js
// @codekit-prepend lib/highlight.min.js
// @codekit-prepend lib/jquery-1.9.0.js
// @codekit-prepend lib/jquery.jpanelmenu.min.js
// @codekit-prepend lib/plugins.js
// var jPanelMenu = {};
// $(function() {
// 	$('pre').each(function(i, e) {hljs.highlightBlock(e)});
	
// 	jPanelMenu = $.jPanelMenu({
// 		menu: 'header.main nav',
// 		openPosition: '250px',
// 		closeOnContentClick: false,
// 		// animated: true,
// 		duration: 300
// 	});
// 	jPanelMenu.on();

// 	$(document).on('click',jPanelMenu.menu + ' li a',function(e){
// 		if ( jPanelMenu.isOpen() && $(e.target).attr('href').substring(0,1) == '#' ) { jPanelMenu.close(); }
// 	});

// 	$(document).on('click','#trigger-off',function(e){
// 		jPanelMenu.off();
// 		$('html').css('padding-top','40px');
// 		$('#trigger-on').remove();
// 		$('body').append('<a href="" title="Re-Enable jPanelMenu" id="trigger-on">Re-Enable jPanelMenu</a>');
// 		e.preventDefault();
// 	});

// 	$(document).on('click','#trigger-on',function(e){
// 		jPanelMenu.on();
// 		$('html').css('padding-top',0);
// 		$('#trigger-on').remove();
// 		e.preventDefault();
// 	});
// });